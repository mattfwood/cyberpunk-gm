/**
 * Helper script to turn tables of data from cyberpunk rulebook into more helpful objects
 *
 *
 */
// EXAMPLE INPUT
// 1 7 6 6 5 6 8 7 7 3 8
// 2 3 7 7 7 7 6 7 7 5 8
// 3 4 5 7 7 6 6 7 7 5 8
// 4 4 5 7 7 6 8 7 6 3 8
// 5 3 7 7 7 6 8 6 5 4 7
// 6 5 6 7 5 7 8 5 7 3 7
// 7 5 6 6 7 7 8 7 6 3 6
// 8 5 7 7 5 6 6 6 6 4 8
// 9 3 5 5 6 7 8 7 5 5 7
// 10 4 5 6 5 8 8 7 6 4 7

// EXAMPLE OUTPUT
// index 0 is a roll of 1, index 11 is a roll of 10
// int: [7, 3, 4, 4, 3, 5, 5, 5, 3, 4],
// ref: [6, 7, 5, 5, 7, 6, 6, 7, 5, 5],
// dex: [6, 7, 7, 7, 7, 7, 6, 7, 5, 6],
// tech: [5, 7, 7, 7, 7, 5, 7, 5, 6, 5],
// cool: [6, 7, 6, 6, 6, 7, 7, 6, 7, 8],
// will: [8, 6, 6, 8, 8, 8, 8, 6, 8, 8],
// luck: [7, 7, 7, 7, 6, 5, 7, 6, 7, 7],
// move: [7, 7, 7, 6, 5, 7, 6, 6, 5, 6],
// body: [3, 5, 5, 3, 4, 3, 3, 4, 5, 4],
// emp: [8, 8, 8, 8, 7, 7, 6, 8, 7, 7],

import { readFileSync, writeFileSync } from 'fs';

const fileText = readFileSync('./scripts/input.txt', 'utf-8');

const output = {
  int: [],
  ref: [],
  dex: [],
  tech: [],
  cool: [],
  will: [],
  luck: [],
  move: [],
  body: [],
  emp: [],
};

const lines = fileText.split('\n').map((line) => line.split(' '));

lines.forEach((line) => {
  // remove the first number of each line since it's just the roll
  line.shift();

  // iterate over each STAT
  Object.keys(output).forEach((key, index) => {
    // for each STAT, push the current STATs index value to the output with the matching STAT key
    output[key].push(line[index]);
  });
});

console.log(output);

writeFileSync('./scripts/output.json', JSON.stringify(output));

export {};
