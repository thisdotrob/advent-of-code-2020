const fs = require("fs");

console.log(
  fs
    .readFileSync("input.txt", "utf8")
    .trim()
    .split("\n\n")
    .reduce((sum, groupInput) => {
      const [shortestIndividualAnswers, ...groupAnswers] = groupInput
        .split(/\n/)
        .map((str) => str.split(""))
        .sort((a, b) => a.length - b.length);

      const groupAllYesAnswers = shortestIndividualAnswers.reduce(
        (acc, char) =>
          groupAnswers.every((individualAnswers) =>
            individualAnswers.includes(char)
          )
            ? [...acc, char]
            : acc,
        []
      );
      return sum + groupAllYesAnswers.length;
    }, 0)
);
