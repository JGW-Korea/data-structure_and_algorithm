const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

const average = Math.floor(input.reduce((prev, curr) => prev + curr) / input.length);
const midNumber = input[Math.floor(input.length / 2)];

console.log(average);
console.log(midNumber);