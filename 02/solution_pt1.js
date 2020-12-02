const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf8').trim().split("\n").map(l => l.split(" "))


const valid = lines.filter(l => {
    const [minInstances, maxInstances] = l[0].split("-")
    const requiredChar = l[1][0]
    const password = l[2]
    const charCount = password.length - password.replace(new RegExp(requiredChar, 'g'), '').length
    return charCount >= minInstances && charCount <= maxInstances
})

console.log(valid.length)
