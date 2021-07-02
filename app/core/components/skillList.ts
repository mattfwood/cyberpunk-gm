// import { Skill } from 'app/pages';
import { Character } from '../atoms/roleAtom';
import { STAT_LIST } from './roleStats';

export const categories = [
  'awareness',
  'body',
  'control',
  'education',
  'fighting',
  'performance',
  'rangedWeapon',
  'social',
  'technique',
] as const;

type SkillDetail = {
  linkedStat: typeof STAT_LIST[number];
  category: typeof categories[number];
};

export const skillList: { [key in Skill]: SkillDetail } = {
  athletics: {
    linkedStat: 'dex',
    category: 'body',
  },
  basicTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  brawling: {
    linkedStat: 'dex',
    category: 'fighting',
  },
  bribery: {
    linkedStat: 'cool',
    category: 'social',
  },
  concentration: {
    linkedStat: 'will',
    category: 'awareness',
  },
  conversation: {
    linkedStat: 'emp',
    category: 'social',
  },
  cyberTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  driving: {
    linkedStat: 'ref',
    category: 'control',
  },
  education: {
    linkedStat: 'int',
    category: 'education',
  },
  evasion: {
    linkedStat: 'dex',
    category: 'fighting',
  },
  firstAid: {
    linkedStat: 'tech',
    category: 'technique',
  },
  humanPerception: {
    linkedStat: 'emp',
    category: 'social',
  },
  interrogation: {
    linkedStat: 'cool',
    category: 'social',
  },
  localExpert: {
    linkedStat: 'int',
    category: 'education',
  },
  marksmanship: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  meleeWeapon: {
    linkedStat: 'dex',
    category: 'fighting',
  },
  perception: {
    linkedStat: 'int',
    category: 'awareness',
  },
  persuasion: {
    linkedStat: 'cool',
    category: 'social',
  },
  playInstrument: {
    linkedStat: 'emp',
    category: 'performance',
  },
  stealth: {
    linkedStat: 'dex',
    category: 'body',
  },
  tracking: {
    linkedStat: 'int',
    category: 'awareness',
  },
  accounting: {
    linkedStat: 'int',
    category: 'education',
  },
  acting: {
    linkedStat: 'cool',
    category: 'performance',
  },
  airVehicleTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  animalHandling: {
    linkedStat: 'int',
    category: 'education',
  },
  archery: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  autofire: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  bureaucracy: {
    linkedStat: 'int',
    category: 'education',
  },
  business: {
    linkedStat: 'int',
    category: 'education',
  },
  composition: {
    linkedStat: 'int',
    category: 'education',
  },
  concealAndRevealObject: {
    linkedStat: 'int',
    category: 'awareness',
  },
  contortionist: {
    linkedStat: 'dex',
    category: 'body',
  },
  criminology: {
    linkedStat: 'int',
    category: 'education',
  },
  cryptography: {
    linkedStat: 'int',
    category: 'education',
  },
  dance: {
    linkedStat: 'dex',
    category: 'body',
  },
  deduction: {
    linkedStat: 'int',
    category: 'education',
  },
  demolitions: {
    linkedStat: 'tech',
    category: 'technique',
  },
  driveLandVehicle: {
    linkedStat: 'ref',
    category: 'control',
  },
  electronicsAndSecurityTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  endurance: {
    linkedStat: 'will',
    category: 'body',
  },
  forgery: {
    linkedStat: 'tech',
    category: 'technique',
  },
  gamble: {
    linkedStat: 'int',
    category: 'education',
  },
  handgun: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  heavyWeapons: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  landVehicleTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  language: {
    linkedStat: 'int',
    category: 'education',
  },
  librarySearch: {
    linkedStat: 'int',
    category: 'education',
  },
  lipreading: {
    linkedStat: 'int',
    category: 'awareness',
  },
  martialArts: {
    linkedStat: 'dex',
    category: 'fighting',
  },
  paintOrDrawOrSculpt: {
    linkedStat: 'tech',
    category: 'technique',
  },
  paramedic: {
    linkedStat: 'tech',
    category: 'technique',
  },
  personalGrooming: {
    linkedStat: 'cool',
    category: 'social',
  },
  photographyAndFilm: {
    linkedStat: 'tech',
    category: 'technique',
  },
  picklock: {
    linkedStat: 'tech',
    category: 'technique',
  },
  pickpocket: {
    linkedStat: 'tech',
    category: 'technique',
  },
  pilotAirVehicle: {
    linkedStat: 'ref',
    category: 'control',
  },
  pilotSeaVehicle: {
    linkedStat: 'ref',
    category: 'control',
  },
  resistTortureOrDrugs: {
    linkedStat: 'will',
    category: 'body',
  },
  riding: {
    linkedStat: 'ref',
    category: 'control',
  },
  science: {
    linkedStat: 'int',
    category: 'education',
  },
  seaVehicleTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  shoulderArms: {
    linkedStat: 'ref',
    category: 'rangedWeapon',
  },
  streetwise: {
    linkedStat: 'cool',
    category: 'social',
  },
  tactics: {
    linkedStat: 'int',
    category: 'education',
  },
  trading: {
    linkedStat: 'cool',
    category: 'social',
  },
  wardrobeAndStyle: {
    linkedStat: 'cool',
    category: 'social',
  },
  weaponsTech: {
    linkedStat: 'tech',
    category: 'technique',
  },
  wildernessSurvival: {
    linkedStat: 'int',
    category: 'education',
  },
} as const;

// const characterSkills: Partial<{ [key in Skill]: number }> = {};

// Object.keys(skillList).forEach((skillName) => {
//   characterSkills[skillName] = 0;
// });

const SKILL_LIST = [
  'athletics',
  'basicTech',
  'brawling',
  'bribery',
  'concentration',
  'conversation',
  'cyberTech',
  'driving',
  'education',
  'evasion',
  'firstAid',
  'humanPerception',
  'interrogation',
  'localExpert',
  'marksmanship',
  'meleeWeapon',
  'perception',
  'persuasion',
  'playInstrument',
  'stealth',
  'tracking',
  'accounting',
  'acting',
  'airVehicleTech',
  'animalHandling',
  'archery',
  'autofire',
  'bureaucracy',
  'business',
  'composition',
  'concealAndRevealObject',
  'contortionist',
  'criminology',
  'cryptography',
  'dance',
  'deduction',
  'demolitions',
  'driveLandVehicle',
  'electronicsAndSecurityTech',
  'endurance',
  'forgery',
  'gamble',
  'handgun',
  'heavyWeapons',
  'landVehicleTech',
  'language',
  'librarySearch',
  'lipreading',
  'martialArts',
  'paintOrDrawOrSculpt',
  'paramedic',
  'personalGrooming',
  'photographyAndFilm',
  'picklock',
  'pickpocket',
  'pilotAirVehicle',
  'pilotSeaVehicle',
  'resistTortureOrDrugs',
  'riding',
  'science',
  'seaVehicleTech',
  'shoulderArms',
  'streetwise',
  'tactics',
  'trading',
  'wardrobeAndStyle',
  'weaponsTech',
  'wildernessSurvival',
] as const;

export type Skill = typeof SKILL_LIST[number];

const SKILL_TUPLES = SKILL_LIST.map((skillName) => [skillName, 0]);

const characterSkills: { [key in Skill]: number } =
  Object.fromEntries(SKILL_TUPLES);

console.log(SKILL_LIST);

export { characterSkills };
