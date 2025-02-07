function solution(N, schedules) {
  let maxPrice = 0;

  function dfs(day, price) {
    if(day >= N) {
      if(day === N) maxPrice = Math.max(maxPrice, price);
      return;
    }

    dfs(day + schedules[day][0], price + schedules[day][1]) // 해당 날짜의 상담을 할 경우
    dfs(day + 1, price) // 해당 날짜의 상담을 하지 않은 경우;
  }
  
  dfs(0, 0);
  
  return maxPrice;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const schedules = [];

for(let i = 1; i <= N; i++) {
  schedules[i-1] = input[i].split(' ').map(Number);
}

console.log(solution(N, schedules));