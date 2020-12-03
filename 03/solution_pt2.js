const fs = require("fs");

const TREE = "#";

const shouldSkipLine = (lineNum, routeY) => lineNum % routeY;

const treesEncountered = (lines) => ([routeX, routeY]) => {
  return lines.reduce((count, line, lineNum) => {
    if (shouldSkipLine(lineNum, routeY)) {
      return count;
    }
    const position = lineNum * (routeX / routeY);
    const numLineCopiesNeeded = Math.ceil(position / line.length) + 1;
    const extendedLine = Array(numLineCopiesNeeded).fill(line).flat();

    const marker = extendedLine[position];
    return marker === TREE ? count + 1 : count;
  }, 0);
};

const routes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const lines = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(""));

console.log(
  routes.map(treesEncountered(lines)).reduce((acc, count) => acc * count)
);
