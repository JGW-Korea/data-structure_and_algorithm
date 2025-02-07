const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = Number(input);
let result = '';

for(let i = 1; i <= number; i++) {
  result += '*'.repeat(i) + ' '.repeat((number - i) * 2) + '*'.repeat(i) + '\n';
}

for(let i = number - 1; i > 0; i--) {
  result += '*'.repeat(i) + ' '.repeat((number - i) * 2) + '*'.repeat(i) + '\n';
}

console.log(result);