const fs = require("fs");

const bags = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .reduce((bags, line) => {
    const bagColour = line.match(/^(.+) bags /)[1];
    const contents = {};
    for (const [_, quantity, innerBagColour] of line.matchAll(
      /(\d+) (\w+ \w+)/g
    )) {
      contents[innerBagColour] = parseInt(quantity);
    }
    bags[bagColour] = contents;
    return bags;
  }, {});

function count(contents) {
  let result = 0;
  for (const [bagColour, quantity] of Object.entries(contents)) {
    result += quantity + quantity * count(bags[bagColour]);
  }
  return result;
}

console.log(count(bags["shiny gold"]));
