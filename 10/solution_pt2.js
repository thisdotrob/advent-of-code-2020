const fs = require("fs");

const adapters = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .map((s) => parseInt(s))
  .sort((a, b) => a - b);

const end = adapters[adapters.length - 1];

const memo = {};

function arrangements(num = 0) {
  if (memo[num] === undefined) {
    if (num !== 0 && !adapters.includes(num)) {
      memo[num] = 0;
    } else if (num === end) {
      memo[num] = 1;
    } else {
      memo[num] =
        arrangements(num + 1) + arrangements(num + 2) + arrangements(num + 3);
    }
  }
  return memo[num];
}

console.log(arrangements());
