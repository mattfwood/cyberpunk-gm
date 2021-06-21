export const STAT_LIST = [
  'int',
  'ref',
  'dex',
  'tech',
  'cool',
  'will',
  'luck',
  'move',
  'body',
  'emp',
] as const;

export const rockerboyStats = {
  // index 0 is a roll of 1, index 11 is a roll of 10
  int: [7, 3, 4, 4, 3, 5, 5, 5, 3, 4],
  ref: [6, 7, 5, 5, 7, 6, 6, 7, 5, 5],
  dex: [6, 7, 7, 7, 7, 7, 6, 7, 5, 6],
  tech: [5, 7, 7, 7, 7, 5, 7, 5, 6, 5],
  cool: [6, 7, 6, 6, 6, 7, 7, 6, 7, 8],
  will: [8, 6, 6, 8, 8, 8, 8, 6, 8, 8],
  luck: [7, 7, 7, 7, 6, 5, 7, 6, 7, 7],
  move: [7, 7, 7, 6, 5, 7, 6, 6, 5, 6],
  body: [3, 5, 5, 3, 4, 3, 3, 4, 5, 4],
  emp: [8, 8, 8, 8, 7, 7, 6, 8, 7, 7],
};
