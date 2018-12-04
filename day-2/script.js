const fs = require("fs");

let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

// Split input to separate array of arrays
let inputArray = [];

// Iterate over input and split all elements and store to inputArray
for (let i = 0; i < input.length; i++) {
  let splitString = input[i].split("");
  inputArray.push(splitString);
}

/*
 * Part One
 */

// Declare function to create character maps of all strings from inputArray
const createCharacterMaps = array => {
  let charMap = {};

  for (el of array) {
    if (!charMap[el]) {
      charMap[el] = 1;
    } else {
      charMap[el] += 1;
    }
  }
  charMapArray.push(charMap);
};

// Declare array to store character maps
const charMapArray = [];

// Declare variables to count number of doubles and triples;
let doubles = 0;
let triples = 0;

// Iterate over inputArray
for (let j = 0; j < inputArray.length; j++) {
  createCharacterMaps(inputArray[j]);
}

// Create function to check whether CharacterMap contains a two or three
const checkTwoOrThree = map => {
  let two = 0;
  let three = 0;

  // Iterate over CharacterMap to check for doubles
  for (let m in map) {
    if (map[m] === 2) {
      two += 1;
    } else if (map[m] === 3) {
      three += 1;
    }
  }

  // Increment doubles counter if double found
  if (two > 0) {
    doubles += 1;
  }

  // Increment triples counter if triples found
  if (three > 0) {
    triples += 1;
  }
};

// Iterate over CharacterMaprArray to chek for doubles or triples;
for (let k = 0; k < charMapArray.length; k++) {
  checkTwoOrThree(charMapArray[k]);
}

console.log(`Result: ${doubles * triples}`);
