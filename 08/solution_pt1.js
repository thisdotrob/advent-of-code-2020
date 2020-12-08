const fs = require("fs");

const program = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split(/\n/)
  .map((l) => {
    const [instruction, num] = l.split(" ");
    return [instruction, parseInt(num)];
  });

let i = 0;
let acc = 0;
let seen = [];
let terminated = false;

while (!terminated && !seen.includes(i)) {
  seen = [...seen, i];
  let [instruction, num] = program[i];
  if (instruction === "acc") {
    acc = acc + num;
    i = i + 1;
  } else if (instruction === "jmp") {
    i = i + num;
  } else {
    i = i + 1;
  }
  if (i === program.length) {
    terminated = true;
  }
}

console.log(acc);
