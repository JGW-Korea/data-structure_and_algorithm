const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

console.log([...arr1, ...arr2].sort((a, b) => a - b).join(' '));