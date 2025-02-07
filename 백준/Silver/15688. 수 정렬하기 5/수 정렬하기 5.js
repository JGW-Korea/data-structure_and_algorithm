const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const numbers = new Array(n);

for(let i = 0; i < n; i++) {
    numbers[i] = input[i];
}

console.log(numbers.sort((a, b) => a - b).join('\n'));