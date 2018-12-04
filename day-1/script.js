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
// Declare boolean to track whether duplicate found
let currentFrequency = 0;
let prevFreq = [];
let duplicateFrequencies = [];
let duplicateFound = false;

// Create function to map over inputArray to find all frequencies visited
const calcFrequencies = () => {
  let frequencies = inputArray.map(frequency => {
    return (currentFrequency += frequency);
  });

  return frequencies;
};

while (!duplicateFound) {
  let freq = calcFrequencies();
  for (let f of freq) {
    if (!prevFreq.includes(f)) {
      prevFreq.push(f);
    } else {
      duplicateFrequencies.push(f);
      duplicateFound = true;
    }
  }
}

console.log(`Duplicate: ${duplicateFrequencies[0]}`);
