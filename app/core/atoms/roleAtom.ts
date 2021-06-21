import { atom, useRecoilState } from 'recoil';
import { roles } from '../components/roles';
import { STAT_LIST } from '../components/roleStats';

export type Stat = typeof STAT_LIST[number];

export type Character = {
  role?: keyof typeof roles;
  stats?: {
    [key in Stat]?: string;
  };
  skills?: {
    [key: string]: number;
  };
};

export const characterState = atom<Character>({
  key: 'characterState', // unique ID (with respect to other atoms/selectors)
  default: {
    role: undefined,
  }, // default value (aka initial value)
});

export const useCharacterState = () => useRecoilState(characterState);
