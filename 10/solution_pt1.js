const fs = require("fs");

const adapters = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .map((s) => parseInt(s))
  .sort((a, b) => a - b);

const calcDistribution = (
  adapters,
  distribution = { 1: 0, 2: 0, 3: 0 },
  i = 0
) => {
  const prevAdapter = adapters[i - 1] || 0;
  const adapter = adapters[i] || adapters[i - 1] + 3;
  const joltDifference = adapter - prevAdapter;
  const newDistribution = {
    ...distribution,
    [joltDifference]: distribution[joltDifference] + 1,
  };
  if (i === adapters.length) {
    return newDistribution;
  } else {
    return calcDistribution(adapters, newDistribution, i + 1);
  }
};

const distribution = calcDistribution(adapters);
console.log(distribution[1] * distribution[3]);
