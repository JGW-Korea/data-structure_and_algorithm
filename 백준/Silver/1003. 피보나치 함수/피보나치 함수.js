function solution(N) {
  if(N === 0) return '1 0'; // N이 0일 경우 바로 '1 0'을 반환한다.

  // dp[i][j] = dp[i][0]은 수열, dp[i][1]은 0이 나온 횟수, dp[i][2]은 1이 나온 횟수를 나타낸다.
  const dp = Array.from({length: N + 1}, () => [0, 0, 0]);

  // dp 테이블 초기화 : 해당 문제는 dp[0]번 테이블부터 정의해야 0과 1이 나온 횟수를 구할 수 있다.
  dp[0][1] = 1;
  dp[1][0] = 1;
  dp[1][2] = 1;

  // 점화식
  //  - dp[i][0] = dp[i - 2][0] + dp[i - 1][0] : 피보나치 수열
  //  - dp[i][1] = dp[i - 2][1] + dp[i - 1][1] : 0이 나온 횟수
  //  - dp[i][2] = dp[i - 2][2] + dp[i - 1][2] : 1이 나온 횟수
  for(let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 2][0] + dp[i - 1][0];
    dp[i][1] = dp[i - 2][1] + dp[i - 1][1];
    dp[i][2] = dp[i - 2][2] + dp[i - 1][2];
  }

  return `${dp[N][1]} ${dp[N][2]}`;
}

const fs = require('fs');
const [tc, ...N] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let result = '';

for(let i = 0; i < tc; i++) {
  result += solution(N[i]) + '\n';
}

console.log(result);