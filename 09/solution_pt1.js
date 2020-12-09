const fs = require("fs");

const input = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .map((s) => parseInt(s));

const findSum = (preamble, num) => {
  for (const x of preamble) {
    for (const y of preamble) {
      if (x !== y && x + y === num) {
        return true;
      }
    }
  }
};

const preambleLength = 25;
let preamble;

let position = preambleLength;
let valid = true;

while (valid) {
  preamble = input.slice(position - preambleLength, position);
  if (!findSum(preamble, input[position])) {
    valid = false;
  } else {
    position++;
  }
}

console.log(input[position]);
