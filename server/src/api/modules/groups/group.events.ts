import prisma from '../../../prisma';
import { MemberJoinedEvent, MemberLeftEvent, MemberRoleChangeEvent, PlayerType } from '../../../utils';
import { jobManager, JobType } from '../../jobs';
import metrics from '../../services/external/metrics.service';
import * as discordService from '../../services/external/discord.service';
import { addToGroupCompetitions } from '../competitions/services/AddToGroupCompetitionsService';
import { removeFromGroupCompetitions } from '../competitions/services/RemoveFromGroupCompetitionsService';

function onGroupUpdated(groupId: number) {
  jobManager.add({ type: JobType.UPDATE_GROUP_SCORE, payload: { groupId } });
}

function onGroupCreated(groupId: number) {
  jobManager.add({ type: JobType.UPDATE_GROUP_SCORE, payload: { groupId } });
}

async function onMembersRolesChanged(events: MemberRoleChangeEvent[]) {
  await metrics.trackEffect('dispatchMembersRolesChanged', async () => {
    await discordService.dispatchMembersRolesChanged(events);
  });
}

async function onMembersJoined(events: MemberJoinedEvent[]) {
  const groupId = events[0].groupId;
  const playerIds = events.map(m => m.playerId);

  // Add these new members to all upcoming and ongoing competitions
  await metrics.trackEffect('addToGroupCompetitions', async () => {
    await addToGroupCompetitions(groupId, playerIds);
  });

  // Fetch all the newly added members
  const players = await prisma.player.findMany({
    where: { id: { in: playerIds } }
  });

  // If couldn't find any players for these ids, ignore event
  if (!players || players.length === 0) return;

  // Dispatch this event to the discord service
  await metrics.trackEffect('dispatchMembersJoined', async () => {
    await discordService.dispatchMembersJoined(groupId, events, players);
  });

  // Request updates for any new players
  players.forEach(({ username, type, registeredAt }) => {
    if (type !== PlayerType.UNKNOWN || Date.now() - registeredAt.getTime() > 60_000) return;
    jobManager.add({ type: JobType.UPDATE_PLAYER, payload: { username } });
  });
}

async function onMembersLeft(events: MemberLeftEvent[]) {
  const groupId = events[0].groupId;
  const playerIds = events.map(m => m.playerId);

  // Remove these players from ongoing/upcoming group competitions
  await metrics.trackEffect('removeFromGroupCompetitions', async () => {
    await removeFromGroupCompetitions(groupId, playerIds);
  });

  // Dispatch this event to the discord service
  await metrics.trackEffect('dispatchMembersLeft', async () => {
    await discordService.dispatchMembersLeft(groupId, playerIds);
  });
}

export { onGroupCreated, onGroupUpdated, onMembersJoined, onMembersLeft, onMembersRolesChanged };
