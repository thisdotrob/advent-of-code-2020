const fs = require("fs");

console.log(
  fs
    .readFileSync("input.txt", "utf8")
    .trim()
    .split("\n\n")
    .map((groupInput) => groupInput.replace(/\n/g, "").split(""))
    .reduce((sum, groupAnswers) => {
      return sum + new Set(groupAnswers).size;
    }, 0)
);
