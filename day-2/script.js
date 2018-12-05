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

/*
 * Part Two
 */

// Create variable to store answer
let answer;

// Create function to compare each character of a string to the character at same position of the next string
const compareStrings = (string1, string2) => {
  let counter = 0;
  let matchingString = "";
  let matchedChar;

  for (let i = 0; i < string1.length; i++) {
    // Check whether character at i is different for each string
    // If different increment counter
    if (string1.charAt(i) !== string2.charAt(i)) {
      // Find index of matched character;
      matchedChar = i;
      counter++;
    }
  }

  // If only one character matched set matching string to String1
  if (counter === 1) {
    matchingString = string1;
    // Make substring from start of matching string to matching character
    let substr1 = matchingString.slice(0, matchedChar);
    // Make substring from character after matching character to the end of string
    let substr2 = matchingString.slice(matchedChar + 1, matchingString.length);

    // Concatenate substrings and submit answer
    console.log(`Answer: ${substr1.concat(substr2)}`);
  }
};

// Iterate over input array and compare strings
for (let j = 0; j < input.length; j++) {
  for (let k = 0; k < input.length; k++) {
    if (j === k) {
      continue;
    } else {
      compareStrings(input[j], input[k]);
    }
  }
}
