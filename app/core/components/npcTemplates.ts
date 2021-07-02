import { Character } from 'app/pages';

export const templates: { [key: string]: Partial<Character> } = {
  bodyguard: {
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
    weapons: [
      { name: 'Poor Quality Shotgun', damage: '5d6' },
      { name: 'Very Heavy Pistol', damage: '4d6' },
    ],
    armor: {
      head: 7,
      body: 7,
    },
  },
};