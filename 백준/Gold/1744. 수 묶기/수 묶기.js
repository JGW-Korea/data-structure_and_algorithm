const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let answer = 0;
let plus_arr = arr.filter(value => value > 0).sort((a, b) => b - a);
let minus_arr = arr.filter(value => value <= 0).sort((a, b) => a - b);

for(let i = 0; i < plus_arr.length; i+=2) {
  if(i === plus_arr.length - 1) answer += plus_arr[i];
  else if(plus_arr[i] * plus_arr[i+1] > plus_arr[i] + plus_arr[i+1]) {
    answer += plus_arr[i] * plus_arr[i+1]
  } else {
    answer += plus_arr[i] + plus_arr[i+1]
  }
}

for(let i = 0; i < minus_arr.length; i+=2) {
  if(i === minus_arr.length - 1) answer += minus_arr[i];
  else {
    answer += minus_arr[i] * minus_arr[i + 1];
  }
}

console.log(answer)