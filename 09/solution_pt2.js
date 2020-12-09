const fs = require("fs");

const input = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .map((s) => parseInt(s));

const target = 373803594;

let startPosition = 0;
let endPosition = 1;

let validSet = false;

while (!validSet) {
  const set = input.slice(startPosition, endPosition + 1);
  const sum = set.reduce((acc, n) => acc + n, 0);
  if (sum === target) {
    validSet = set;
  } else if (sum < target) {
    endPosition++;
  } else {
    startPosition++;
    endPosition = startPosition + 1;
  }
}

const sorted = validSet.sort((a, b) => a - b);

console.log(sorted[0] + sorted[sorted.length - 1]);
