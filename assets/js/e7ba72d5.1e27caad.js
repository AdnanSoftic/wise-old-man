"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),g=n,c=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8868:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Group Types & Entities",sidebar_position:1},i="Group Types & Entities",p={unversionedId:"groups-api/group-type-definitions",id:"groups-api/group-type-definitions",title:"Group Types & Entities",description:"(Enum) Group Role",source:"@site/docs/groups-api/group-type-definitions.md",sourceDirName:"groups-api",slug:"/groups-api/group-type-definitions",permalink:"/groups-api/group-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/groups-api/group-type-definitions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Group Types & Entities",sidebar_position:1},sidebar:"sidebar",previous:{title:"Groups API",permalink:"/category/groups-api"},next:{title:"Group Endpoints",permalink:"/groups-api/group-endpoints"}},o={},d=[{value:"<code>(Enum)</code> Group Role",id:"enum-group-role",level:3},{value:"(<code>Enum</code>) Activity Type",id:"enum-activity-type",level:3},{value:"<code>(Object)</code> GroupSocialLinks",id:"object-groupsociallinks",level:3},{value:"<code>(Object)</code> Group",id:"object-group",level:3},{value:"<code>(Object)</code> Group Details",id:"object-group-details",level:3},{value:"<code>(Object)</code> Membership",id:"object-membership",level:3},{value:"<code>(Object)</code> Group Membership",id:"object-group-membership",level:3},{value:"<code>(Object)</code> Player Membership",id:"object-player-membership",level:3},{value:"<code>(Object)</code> Group Member Fragment",id:"object-group-member-fragment",level:3},{value:"<code>(Object)</code> Group Hiscores Entry",id:"object-group-hiscores-entry",level:3},{value:"<code>(Object)</code> Group Hiscores Skill Item",id:"object-group-hiscores-skill-item",level:3},{value:"<code>(Object)</code> Group Hiscores Boss Item",id:"object-group-hiscores-boss-item",level:3},{value:"<code>(Object)</code> Group Hiscores Activity Item",id:"object-group-hiscores-activity-item",level:3},{value:"<code>(Object)</code> Group Hiscores Computed Metric Item",id:"object-group-hiscores-computed-metric-item",level:3},{value:"<code>(Object)</code> Group Delta Progress",id:"object-group-delta-progress",level:3},{value:"<code>(Object)</code> Delta Group Leaderboard Entry",id:"object-delta-group-leaderboard-entry",level:3},{value:"<code>(Object)</code> Group Statistics",id:"object-group-statistics",level:3},{value:"<code>(Object)</code> Metric Leaders",id:"object-metric-leaders",level:3},{value:"<code>(Object)</code> Group Activity",id:"object-group-activity",level:3}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"group-types--entities"},"Group Types & Entities"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"enum-group-role"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Group Role"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"'achiever', 'adamant', 'adept', 'administrator', 'admiral', 'adventurer', 'air', 'anchor', 'apothecary', 'archer', 'armadylean', 'artillery', 'artisan', 'asgarnian', 'assassin', 'assistant', 'astral', 'athlete', 'attacker', 'bandit', 'bandosian', 'barbarian', 'battlemage', 'beast', 'berserker', 'blisterwood', 'blood', 'blue', 'bob', 'body', 'brassican', 'brawler', 'brigadier', 'brigand', 'bronze', 'bruiser', 'bulwark', 'burglar', 'burnt', 'cadet', 'captain', 'carry', 'champion', 'chaos', 'cleric', 'collector', 'colonel', 'commander', 'competitor', 'completionist', 'constructor', 'cook', 'coordinator', 'corporal', 'cosmic', 'councillor', 'crafter', 'crew', 'crusader', 'cutpurse', 'death', 'defender', 'defiler', 'deputy_owner', 'destroyer', 'diamond', 'diseased', 'doctor', 'dogsbody', 'dragon', 'dragonstone', 'druid', 'duellist', 'earth', 'elite', 'emerald', 'enforcer', 'epic', 'executive', 'expert', 'explorer', 'farmer', 'feeder', 'fighter', 'fire', 'firemaker', 'firestarter', 'fisher', 'fletcher', 'forager', 'fremennik', 'gamer', 'gatherer', 'general', 'gnome_child', 'gnome_elder', 'goblin', 'gold', 'goon', 'green', 'grey', 'guardian', 'guthixian', 'harpoon', 'healer', 'hellcat', 'helper', 'herbologist', 'hero', 'holy', 'hoarder', 'hunter', 'ignitor', 'illusionist', 'imp', 'infantry', 'inquisitor', 'iron', 'jade', 'justiciar', 'kandarin', 'karamjan', 'kharidian', 'kitten', 'knight', 'labourer', 'law', 'leader', 'learner', 'legacy', 'legend', 'legionnaire', 'lieutenant', 'looter', 'lumberjack', 'magic', 'magician', 'major', 'maple', 'marshal', 'master', 'maxed', 'mediator', 'medic', 'mentor', 'member', 'merchant', 'mind', 'miner', 'minion', 'misthalinian', 'mithril', 'moderator', 'monarch', 'morytanian', 'mystic', 'myth', 'natural', 'nature', 'necromancer', 'ninja', 'noble', 'novice', 'nurse', 'oak', 'officer', 'onyx', 'opal', 'oracle', 'orange', 'owner', 'page', 'paladin', 'pawn', 'pilgrim', 'pine', 'pink', 'prefect', 'priest', 'private', 'prodigy', 'proselyte', 'prospector', 'protector', 'pure', 'purple', 'pyromancer', 'quester', 'racer', 'raider', 'ranger', 'record_chaser', 'recruit', 'recruiter', 'red_topaz', 'red', 'rogue', 'ruby', 'rune', 'runecrafter', 'sage', 'sapphire', 'saradominist', 'saviour', 'scavenger', 'scholar', 'scourge', 'scout', 'scribe', 'seer', 'senator', 'sentry', 'serenist', 'sergeant', 'shaman', 'sheriff', 'short_green_guy', 'skiller', 'skulled', 'slayer', 'smiter', 'smith', 'smuggler', 'sniper', 'soul', 'specialist', 'speed_runner', 'spellcaster', 'squire', 'staff', 'steel', 'strider', 'striker', 'summoner', 'superior', 'supervisor', 'teacher', 'templar', 'therapist', 'thief', 'tirannian', 'trialist', 'trickster', 'tzkal', 'tztok', 'unholy', 'vagrant', 'vanguard', 'walker', 'wanderer', 'warden', 'warlock', 'warrior', 'water', 'wild', 'willow', 'wily', 'wintumber', 'witch', 'wizard', 'worker', 'wrath', 'xerician', 'yellow', 'yew', 'zamorakian', 'zarosian', 'zealot', 'zenyte'\n")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"enum-activity-type"},"(",(0,n.kt)("inlineCode",{parentName:"h3"},"Enum"),") Activity Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"'joined', 'left', 'changed_role'\n")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-groupsociallinks"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," GroupSocialLinks"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"discord"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's Discord URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"twitter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's Twitter URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"youtube"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's Youtube URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"twitch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's Twitch URL")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clanChat"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's clan chat (1-12 characters).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"description"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's description.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"homeworld"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's homeworld.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"verified"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's verified status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"patron"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The groups's patronage status (subscribed to our Patreon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"profileImage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The groups's profile image (Patreon exclusive)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bannerImage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The groups's banner image (Patreon exclusive)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"score"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's global ranking score.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's creation date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's last modification date.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memberCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's total number of members.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-details"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Details"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"extends ",(0,n.kt)("a",{parentName:"p",href:"/groups-api/group-type-definitions#object-group"},"Group"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memberships"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-membership"},"GroupMembership"),"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's memberships.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"socialLinks"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-groupsociallinks"},"GroupSocialLinks"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's social links (Patreon exclusive).")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Membership"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"playerId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"role"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#enum-group-role"},"GroupRole"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's role (rank) in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date at which the player was added as a member to the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date at which the membership was updated.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Membership"),(0,n.kt)("p",null,"Returned in group-centric endpoints."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"extends ",(0,n.kt)("a",{parentName:"p",href:"/groups-api/group-type-definitions#object-membership"},"Membership"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"player"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-player"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The membership's player.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-player-membership"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Player Membership"),(0,n.kt)("p",null,"Returned in player-centric endpoints."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"extends ",(0,n.kt)("a",{parentName:"p",href:"/groups-api/group-type-definitions#object-membership"},"Membership"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"group"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group"},"Group")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group the player is a member in.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-member-fragment"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Member Fragment"),(0,n.kt)("p",null,"Used as an input for group modification endpoints (create, edit, add members, etc)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"username"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"role"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#enum-group-role"},"GroupRole"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's role (rank) in the group.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-hiscores-entry"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Hiscores Entry"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"player"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-player"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The hiscores entry's parent player.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-hiscores-skill-item"},"GroupHiscoresSkillItem")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-hiscores-boss-item"},"GroupHiscoresBossItem")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-hiscores-activity-item"},"GroupHiscoresActivityItem")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-hiscores-computed-metric-item"},"GroupHiscoresComputedMetricItem")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's hiscores values for a specific metric.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-hiscores-skill-item"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Hiscores Skill Item"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rank"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's rank in a specific skill.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"level"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's level in a specific skill.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"experience"),(0,n.kt)("td",{parentName:"tr",align:"left"},"long"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's experience in a specific skill.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-hiscores-boss-item"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Hiscores Boss Item"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rank"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's rank in a specific boss.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"kills"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's kills for a specific boss.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-hiscores-activity-item"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Hiscores Activity Item"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rank"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's rank in a specific activity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"score"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's score in a specific activity.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-hiscores-computed-metric-item"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Hiscores Computed Metric Item"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rank"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's rank in a specific computed metric.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's value in a specific computed metric.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-delta-progress"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Delta Progress"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A player's start value for some time period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"end"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A player's end value for some time period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gained"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A player's gained value for some time period.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-delta-group-leaderboard-entry"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Delta Group Leaderboard Entry"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"player"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-player"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The delta's parent player object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-group-delta-progress"},"Group Delta Progress")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The delta's progress.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"startDate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The starting date of the delta's timespan.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"endDate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ending date of the delta's timespan.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-group-statistics"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Statistics"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxedCombatCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total amount of members with 126 combat level (max combat).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxedTotalCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total amount of members with 2277 total level (maxed).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"maxed200msCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total amount of 200m exp skills between all members.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"averageStats"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-snapshot"},"Snapshot")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The average stats of all group members.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"metricLeaders"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#object-metric-leaders"},"Metric Leaders")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The best player in each metric out of all group members.")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"object-metric-leaders"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Metric Leaders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  skills: {\n    attack: {\n      metric: "attack",\n      ehp: number,\n      rank: number,\n      level: number,\n      experience: number // (can be a long/bigint)\n      player: {\n        id: number,\n        username: string,\n        displayName: string,\n        type: PlayerType,\n        build: PlayerBuild,\n        country: Country?,\n        status: PlayerStatus,\n        exp: number // (can be a long/bigint),\n        ehp: float,\n        ehb: float,\n        ttm: float,\n        tt200m: float,\n        registeredAt: date,\n        updatedAt: date,\n        lastChangedAt: date?,\n        lastImportedAt: date?\n      }\n    },\n    // ... etc for all skills\n  },\n  bosses: {\n    abyssal_sire: {\n      metric: "abyssal_sire",\n      ehb: number,\n      rank: number,\n      kills: number,\n      player: {\n        id: number,\n        username: string,\n        displayName: string,\n        type: PlayerType,\n        build: PlayerBuild,\n        country: Country?,\n        status: PlayerStatus,\n        exp: number // (can be a long/bigint),\n        ehp: float,\n        ehb: float,\n        ttm: float,\n        tt200m: float,\n        registeredAt: date,\n        updatedAt: date,\n        lastChangedAt: date?,\n        lastImportedAt: date?\n      }\n    },\n    // ... etc for all bosses\n  },\n  activities: {\n    bounty_hunter_hunter: {\n      metric: "bounty_hunter_hunter",\n      rank: number,\n      score: number,\n      player: null // Can be null if no player leads\n    },\n    // ... etc for all activities\n  },\n  computed: {\n    ehp: {\n      metric: "ehp",\n      rank: number,\n      value: number,\n      player: {\n        id: number,\n        username: string,\n        displayName: string,\n        type: PlayerType,\n        build: PlayerBuild,\n        country: Country?,\n        status: PlayerStatus,\n        exp: number // (can be a long/bigint),\n        ehp: float,\n        ehb: float,\n        ttm: float,\n        tt200m: float,\n        registeredAt: date,\n        updatedAt: date,\n        lastChangedAt: date?,\n        lastImportedAt: date?\n      }\n    },\n    // ... etc for all computed metrics\n  }\n}\n')),(0,n.kt)("h3",{id:"object-group-activity"},(0,n.kt)("inlineCode",{parentName:"h3"},"(Object)")," Group Activity"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"groupId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"playerId"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#enum-activity-type"},"ActivityType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of activity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"role"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/groups-api/group-type-definitions#enum-group-role"},"GroupRole"),"?"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The player's role (rank) in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The date at which the activity happened.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"player"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-player"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The activity entry's parent player object.")))),(0,n.kt)("br",null))}s.isMDXComponent=!0}}]);