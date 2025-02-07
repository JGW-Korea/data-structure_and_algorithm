const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const maxValue = Math.max(...numbers);

console.log(maxValue);
console.log(numbers.indexOf(maxValue) + 1);