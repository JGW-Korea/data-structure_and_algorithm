const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(input.sort((a, b) => a - b).join(' '));