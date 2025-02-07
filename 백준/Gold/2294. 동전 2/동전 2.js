function solution(N, K, coins) {
  const dp = new Array(K + 1).fill(Infinity); // DP 테이블 정의

  // dp 초기값 정의
  dp[0] = 0; 

  // 점화식 : DP[i] = Math.min(DP[j], DP[j - coins[i]] + 1)
  for(let i = 0; i < N; i++) { // 각 동전에 대한 반복
    for(let j = coins[i]; j < K + 1; j++) { // DP 테이블 갱신에 대한 반복문
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[K] === Infinity ? -1 : dp[K];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

console.log(solution(N, K, coins));