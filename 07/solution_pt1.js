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

function hasShinyGold(bag) {
  const bagColours = Object.keys(bag);
  if (!bagColours.length) {
    return false;
  } else if (bagColours.includes("shiny gold")) {
    return true;
  } else {
    return bagColours.reduce((has, bagColour) => {
      return hasShinyGold(bags[bagColour]) || has;
    }, false);
  }
}

let count = 0;

for (const bag of Object.values(bags)) {
  if (hasShinyGold(bag)) {
    count++;
  }
}

console.log(count);
