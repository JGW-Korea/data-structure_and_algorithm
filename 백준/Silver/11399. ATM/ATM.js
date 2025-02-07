let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let p = input[1].split(' ').map(Number);

p.sort((a, b) => a-b);

let sum = 0;
let time = 0;

for(let i=0;i<p.length;i++) {

  sum += p[i];
  time += sum;
  
}

console.log(time)