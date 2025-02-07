let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let count = 0
let flag = false

while(n >= 0) {

  if(n == 0 || n % 5 == 0) {
    count += parseInt(n / 5);
    console.log(count);
    flag = true;
    break;
  }

  n -= 3;
  count += 1;
  
}

if(!flag) {
  console.log(-1)
}