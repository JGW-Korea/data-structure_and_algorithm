const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let x = Number(input[0].split(' ')[0])

let sum = 0;

for (let i=1;i<=x;i++){
  sum += i;
}

console.log(sum)
