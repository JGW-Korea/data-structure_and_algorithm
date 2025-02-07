function solution(number) {
  // 테이블 정의
  const dp = new Array(number + 1).fill(0);

  // 초기값 정의
  dp[2] = 1;
  dp[3] = 1;

  // 점화식: dp[i] = Min(dp[i - 1], dp[i / 2], dp[i / 3]) + 1;
  for(let i = 4; i <= number; i++) {
    dp[i] = dp[i - 1] + 1// 일단 dp[i - 1]로 초기값을 지정해준다.

    if(i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
    }
    
    if(i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    }
  }

  return dp[number];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));