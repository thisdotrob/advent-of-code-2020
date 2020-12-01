const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
                .split("\n")
                .map(s => parseInt(s))

const numbers = new Set(input)

for (const n of numbers) {
    const target = 2020 - n
    if (numbers.has(target)) {
        console.log(n * target)
        break
    }
}
