const fs = require("fs");

// Import Code of Advent .txt file
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

// Declare array to push parsed values from input
let inputArray = [];

// Push parsed input items to inputArray
for (let item of input) {
  inputArray.push(parseInt(item));
}

/*
 * PART 1
 */

// Iterate over input array to add frequency changes and return the final frequency
let frequency = inputArray.reduce((el, acc) => {
  return (el += acc);
}, 0);

console.log(`Frequency: ${frequency}`);

/*
 * PART 2
 */

// Declare current frequency variable;
// Declare array for previously visited frequencies
// Declare array for storing duplicate frequencies
let currentFrequency = 0;
let prevFreq = [];
let duplicateFrequencies = [];

// Map over inputArray to find all frequencies visited
let frequencies = inputArray.map(frequency => {
  return (currentFrequency += frequency);
});

for (let freq of frequencies) {
  if (!prevFreq.includes(freq)) {
    prevFreq.push(freq);
  } else {
    duplicateFrequencies.push(freq);
  }
}

console.log(`Previous: ${prevFreq}`);
console.log(`Duplicate: ${duplicateFrequencies}`);
