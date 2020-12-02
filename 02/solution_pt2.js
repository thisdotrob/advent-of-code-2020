const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').trim().split("\n").map(l => l.split(" "))

const convertTo0Indexed = n => n - 1

const valid = lines.filter(l => {
    const password = l[2]
    const [positionA, positionB] = l[0].split("-").map(convertTo0Indexed)
    const comparisons = [password[positionA], password[positionB]]
    const requiredChar = l[1][0]
    const matches = comparisons.filter(c => c === requiredChar)
    return matches.length === 1
})

console.log(valid.length)
