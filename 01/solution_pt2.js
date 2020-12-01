const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
                .split("\n")
                .map(s => parseInt(s))
                .sort((a,b) => a - b)

let i0 = -1, i1, i2;

while (true) {
    i0++
    i1 = 0
    i2 = 0
    while (2020 - input[i0] - input[i1] > 0 && i1 < input.length - 1 ) {
        while (2020 - input[i0] - input[i1] - input[i2] >= 0 && i2 < input.length - 1) {
            if (2020 - input[i0] - input[i1] - input[i2] === 0) {
                console.log(input[i0] * input[i1] * input[i2])
                process.exit(0)
            }
            i2++
        }
        i1++
    }
}
