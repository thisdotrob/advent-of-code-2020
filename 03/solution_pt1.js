const fs = require("fs");

const TREE = "#";

console.log(
  fs
    .readFileSync("input.txt", "utf8")
    .trim()
    .split("\n")
    .map((line) => line.split(""))
    .reduce((treesEncountered, line, i) => {
      const position = i * 3;
      const numLineCopiesNeeded = Math.ceil(position / line.length) + 1;
      const extendedLine = Array(numLineCopiesNeeded).fill(line).flat();
      const marker = extendedLine[position];
      return marker === TREE ? treesEncountered + 1 : treesEncountered;
    }, 0)
);
