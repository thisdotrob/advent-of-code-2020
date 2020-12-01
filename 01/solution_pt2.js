const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
                .split("\n")
                .map(s => parseInt(s))
                .sort()

let diff = -1

let n0;
let n1;
let n2;

while (diff !== 0 && input.length) {
    n0 = input.pop()
    let indexA = 0
    while (diff !== 0 && indexA < input.length - 1){
        n1 = input[indexA]
        let indexB = 0
        while(diff !== 0 && indexB < input.length - 1) {
            n2 = input[indexB]
            diff = 2020 - n0 - n1 - n2
            indexB += 1
        }
        indexA += 1
    }
}

console.log(n0 * n1 * n2)
