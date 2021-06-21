import rockerboyStats from './stats/rockerboyStats.json';
import soloStats from './stats/soloStats.json';
import netrunnerStats from './stats/netrunnerStats.json';
import techStats from './stats/techStats.json';
import medtechStats from './stats/medtechStats.json';
import mediaStats from './stats/mediaStats.json';
import lawmanStats from './stats/lawmanStats.json';
import execStats from './stats/execStats.json';
import fixerStats from './stats/fixerStats.json';
import nomadStats from './stats/nomadStats.json';
import {
  rockerboySkills,
  soloSkills,
  netrunnerSkills,
  techSkills,
  medtechSkills,
  mediaSkills,
  lawmanSkills,
  execSkills,
  fixerSkills,
  nomadSkills,
} from './skillTables';

export const roles = {
  rockerboy: {
    itemChoices: [['Heavy Melee Weapon', 'Flashbang Grenade']],
    items: [
      'Very Heavy Pistol',
      'Basic VH Pistol Ammunition x50',
      'Teargas Grenade x2',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
    stats: rockerboyStats,
    skills: rockerboySkills,
  },
  solo: {
    itemChoices: ['Heavy Melee Weapon', 'Bulletproof Shield'],
    items: [
      'Assault Rifle Very Heavy Pistol',
      'Basic VH Pistol Ammunition x30',
      'Basic Rifle Ammunition x70',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
    stats: soloStats,
    skills: soloSkills,
  },
  netrunner: {
    items: [
      'Very Heavy Pistol',
      'Basic VH Pistol Ammunition x30',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
    stats: netrunnerStats,
    skills: netrunnerSkills,
  },
  tech: {
    stats: techStats,
    skills: techSkills,
    itemChoices: [
      [
        'Shotgun, Basic Shotgun Shell Ammunition x100',
        'Assault Rifle, Basic Rifle Ammunition x100',
      ],
    ],
    items: [
      'Flashbang Grenade',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
  },
  medtech: {
    stats: medtechStats,
    skills: medtechSkills,
    itemChoices: [
      'Shotgun, Basic Shotgun Shell Ammunition x100, Incendiary Shotgun Shell Ammunition x10',
      'Assault Rifle, Basic Rifle Ammunition x100, Incendiary Rifle Ammunition x10',
      'Smoke Grenade x2',
    ],
    items: [
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
      'Bulletproof Shield',
    ],
  },
  media: {
    stats: mediaStats,
    skills: mediaSkills,
  },
  lawman: {
    stats: lawmanStats,
    skills: lawmanSkills,
  },
  exec: {
    stats: execStats,
    skills: execSkills,
    items: [
      'Very Heavy Pistol',
      'Basic VH Pistol Ammunition x50',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
  },
  fixer: {
    stats: fixerStats,
    skills: fixerSkills,
  },
  nomad: {
    stats: nomadStats,
    skills: nomadSkills,
    itemChoices: [
      'Heavy Pistol, Basic H Pistol Ammunition x100',
      'Very Heavy Pistol, Basic VH Pistol Ammunition x100',
    ],
    items: [
      'Heavy Melee Weapon or Heavy Pistol',
      'Light Armorjack Body Armor (SP11)',
      'Light Armorjack Head Armor (SP11)',
    ],
  },
} as const;
