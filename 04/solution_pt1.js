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

const requiredFields = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];

const isValid = (passport) => requiredFields.every((f) => passport[f]);

console.log(passports.filter(isValid).length);
