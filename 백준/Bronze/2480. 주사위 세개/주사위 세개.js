const fs = require('fs');
const dice = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 3개의 수가 같은지 판별
if(dice[0] === dice[1] && dice[1] === dice[2]) {
  console.log(10000 + dice[0] * 1000);
}

// 2개의 수가 같은지 판별
else if(dice[0] === dice[1] || dice[0] === dice[2]) {
  console.log(1000 + dice[0] * 100);
}
else if(dice[1] === dice[2]) console.log(1000 + dice[1] * 100);
// 동일한 수가 없을 경우
else {
  console.log(Math.max(dice[0], dice[1], dice[2]) * 100);
}