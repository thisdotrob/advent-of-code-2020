const fs = require("fs");
const passport = (l) =>
  l
    .replace(/\n/g, " ")
    .split(" ")
    .map((p) => p.split(":"))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

const passports = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n\n")
  .map(passport);

const numBetween = (s, n1, n2) => {
  const n = parseInt(s);
  return !isNaN(n) && n >= n1 && n <= n2;
};

const validators = {
  byr: (s) => numBetween(s, 1920, 2002),
  ecl: (s) => /^amb|blu|brn|gry|grn|hzl|oth$/.test(s),
  eyr: (s) => numBetween(s, 2020, 2030),
  hcl: (s) => /^#[0-9a-f]{6}$/.test(s),
  hgt: (s) => {
    const match = (s || "").match(/^([0-9]{2,3})(cm|in)$/);
    if (!match) {
      return false;
    }
    const [val, suffix] = match.slice(1, 3);
    return suffix === "cm"
      ? numBetween(val, 150, 193)
      : numBetween(val, 59, 76);
  },
  iyr: (s) => numBetween(s, 2010, 2020),
  pid: (s) => /^[0-9]{9}$/.test(s),
};

const isValid = (passport) =>
  Object.entries(validators).every(([k, validator]) => validator(passport[k]));

console.log(passports.filter(isValid).length);
