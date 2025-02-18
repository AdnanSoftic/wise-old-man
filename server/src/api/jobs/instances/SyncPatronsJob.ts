import prisma, { Patron } from '../../../prisma';
import { getPatrons } from '../../services/external/patreon.service';
import { sendPatreonUpdateMessage } from '../../services/external/discord.service';
import { JobType, JobDefinition } from '../job.types';
import { onGroupUpdated } from '../../modules/groups/group.events';

class SyncPatronsJob implements JobDefinition<unknown> {
  type: JobType;

  constructor() {
    this.type = JobType.SYNC_PATRONS;
  }

  async execute() {
    if (!process.env.PATREON_BEARER_TOKEN || process.env.NODE_ENV === 'development') {
      return;
    }

    await syncPatrons();
    await syncBenefits();
  }
}

async function syncPatrons() {
  const currentPatrons = await prisma.patron.findMany();

  const toAdd: Patron[] = [];
  const toUpdate: Patron[] = [];
  const toDelete: Patron[] = [];

  const patrons = await getPatrons();
  const newPatronIds = patrons.map(p => p.id);

  const updatedFieldsMap = new Map<string, string>();

  patrons.forEach(p => {
    const match = currentPatrons.find(cp => cp.id === p.id);

    if (!match) {
      toAdd.push(p);
    } else if (needsUpdate(p, match)) {
      toUpdate.push(p);

      // Keep track of which of these fields was updated (we only care about notifications for these)
      if (p.tier !== match.tier) {
        updatedFieldsMap.set(p.id, 'tier');
      } else if (p.discordId !== match.discordId) {
        updatedFieldsMap.set(p.id, 'discordId');
      }
    }
  });

  currentPatrons.forEach(p => {
    if (!newPatronIds.includes(p.id)) {
      toDelete.push(p);
    }
  });

  if (toAdd.length === 0 && toUpdate.length === 0 && toDelete.length === 0) {
    return;
  }

  await prisma.$transaction(async transaction => {
    if (toAdd.length > 0) {
      await transaction.patron.createMany({
        data: toAdd
      });
    }

    if (toDelete.length > 0) {
      await transaction.patron.deleteMany({
        where: { id: { in: toDelete.map(p => p.id) } }
      });
    }

    if (toUpdate.length > 0) {
      for (const patron of toUpdate) {
        await transaction.patron.update({
          where: { id: patron.id },
          data: patron
        });
      }
    }
  });

  toAdd.forEach(p => {
    const discordTag = p.discordId ? `<@${p.discordId}>` : '';
    sendPatreonUpdateMessage(`**🎉 New Patron:** ${p.name} (T${p.tier}) - ${discordTag}`);
  });

  toDelete.forEach(p => {
    const discordTag = p.discordId ? `<@${p.discordId}>` : '';
    sendPatreonUpdateMessage(`**😢 Patron canceled:** ${p.name} (T${p.tier}) - ${discordTag}`);
  });

  Array.from(updatedFieldsMap.entries()).forEach(([patronId, field]) => {
    const p = patrons.find(patron => patron.id === patronId);
    if (!p) return;

    const discordTag = p.discordId ? `<@${p.discordId}>` : '';

    if (field === 'tier') {
      sendPatreonUpdateMessage(`**🔔 Patron tier changed:** ${p.name} (T${p.tier}) - ${discordTag}`);
    } else if (field === 'discordId') {
      sendPatreonUpdateMessage(`**🔔 Patron Discord changed:** ${p.name} (T${p.tier}) - ${discordTag}`);
    }
  });
}

async function syncBenefits() {
  const updatedPatrons = await prisma.patron.findMany();

  const patronGroupIds = updatedPatrons.map(p => p.groupId).filter((id): id is number => id !== null);
  const patronPlayerIds = updatedPatrons.map(p => p.playerId).filter((id): id is number => id !== null);

  const newPatronGroups = await prisma.group.findMany({
    where: {
      id: { in: patronGroupIds },
      patron: false
    }
  });

  await prisma.$transaction(async transaction => {
    // Every player who wasn't a patron and should be, becomes a patron
    await transaction.player.updateMany({
      where: {
        id: { in: patronPlayerIds },
        patron: false
      },
      data: {
        patron: true
      }
    });

    // Every player who was a patron and shouldn't be, is no longer a patron
    await transaction.player.updateMany({
      where: {
        id: { notIn: patronPlayerIds },
        patron: true
      },
      data: {
        patron: false
      }
    });

    // Every group who wasn't a patron and should be, becomes a patron
    await transaction.group.updateMany({
      where: {
        id: { in: patronGroupIds },
        patron: false
      },
      data: {
        patron: true
      }
    });

    // Every group who was a patron and shouldn't be, is no longer a patron
    await transaction.group.updateMany({
      where: {
        id: { notIn: patronGroupIds },
        patron: true
      },
      data: {
        patron: false,
        bannerImage: null,
        profileImage: null
      }
    });

    // Delete any social links from non-patron groups
    await transaction.groupSocialLinks.deleteMany({
      where: {
        groupId: { notIn: patronGroupIds }
      }
    });
  });

  newPatronGroups.forEach(group => {
    onGroupUpdated(group.id);
  });
}

function needsUpdate(a: Patron, b: Patron) {
  // When member unsubscribes, their pledge is no longer returned by the Patreon API,
  // and we lose access to their email address. In this case, we return it as an empty string.
  // Because of this, we should only update the email if the new one is not empty.
  if (a.email !== b.email && a.email.length > 0) {
    return true;
  }

  return a.name !== b.name || a.tier !== b.tier || a.discordId !== b.discordId;
}

export default new SyncPatronsJob();
