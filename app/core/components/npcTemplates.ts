import { Character } from 'app/pages';
import { characterSkills } from './skillList';

type TemplateNames =
  | 'bodyguard'
  | 'boosterganger'
  | 'road ganger'
  | 'security operative'
  | 'netrunner'
  | 'reclaimer chief'
  | 'security officer'
  | 'outrider'
  | 'pyro'
  | 'cyberpsycho';

export const templates: Partial<
  Record<
    TemplateNames,
    Omit<Character, 'id' | 'name' | 'turnComplete' | 'initiative'>
  >
> = {
  bodyguard: {
    notes: '',
    stats: {
      int: 3,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 4,
      luck: 0,
      move: 4,
      body: 6,
      emp: 3,
    },
    currentHealth: 35,
    maxHealth: 35,
    weapons: { 'poor quality shotgun': '5d6', 'very heavy pistol': '4d6' },
    armor: {
      head: 7,
      body: 7,
    },
    skills: {
      ...characterSkills,
      athletics: 9,
      brawling: 11,
      concentration: 6,
      conversation: 5,
      driveLandVehicle: 10,
      education: 4,
      endurance: 6,
      evasion: 7,
      firstAid: 4,
      handgun: 12,
      humanPerception: 5,
      interrogation: 6,
      language: 4,
      localExpert: 4,
      meleeWeapon: 11,
      perception: 6,
      persuasion: 6,
      resistTortureOrDrugs: 4,
      stealth: 7,
    },
  },
  boosterganger: {
    notes: '',
    stats: {
      int: 2,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 2,
      luck: 0,
      move: 4,
      body: 4,
      emp: 3,
    },
    currentHealth: 20,
    maxHealth: 20,
    weapons: { 'poor quality very heavy': '4d6', rippers: '2d6' },
    armor: {
      head: 4,
      body: 4,
    },
    skills: {
      ...characterSkills,
      athletics: 9,
      brawling: 9,
      concealAndRevealObject: 4,
      concentration: 4,
      conversation: 5,
      driveLandVehicle: 10,
      education: 4,
      endurance: 6,
      evasion: 7,
      firstAid: 4,
      handgun: 12,
      humanPerception: 5,
      interrogation: 6,
      language: 4,
      localExpert: 4,
      meleeWeapon: 11,
      perception: 6,
      persuasion: 6,
      resistTortureOrDrugs: 4,
      stealth: 7,
    },
  },
  'road ganger': {
    notes: '',
    stats: {
      int: 2,
      ref: 6,
      dex: 5,
      tech: 2,
      cool: 4,
      will: 2,
      luck: 0,
      move: 4,
      body: 4,
      emp: 3,
    },
    currentHealth: 20,
    maxHealth: 20,
    weapons: { 'poor quality very heavy': '4d6', rippers: '2d6' },
    armor: {
      head: 4,
      body: 4,
    },
    skills: {
      ...characterSkills,
      athletics: 9,
      brawling: 9,
      concealAndRevealObject: 4,
      concentration: 4,
      conversation: 5,
      driveLandVehicle: 10,
      education: 4,
      endurance: 6,
      evasion: 7,
      firstAid: 4,
      handgun: 12,
      humanPerception: 5,
      interrogation: 6,
      language: 4,
      localExpert: 4,
      meleeWeapon: 11,
      perception: 6,
      persuasion: 6,
      resistTortureOrDrugs: 4,
      stealth: 7,
    },
  },
};
