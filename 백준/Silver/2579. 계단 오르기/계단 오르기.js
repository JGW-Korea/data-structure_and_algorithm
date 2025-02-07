function solution(n, scores) {
  if(n === 1) return scores[0];

  // DP 테이블을 어떻게 정의할 것인가? - DP 테이블을 2차원 배열로 만든다.
  //  - K 번째 계단을 연속해서 1번 밟았는지, 2번 밟았는지를 알기 위해서
  //  - 연속해서 1번 밟았다는 이야기는 K - 1번째 계단을 밟지 않았다는 이야기
  //  - 연속해서 2번 밟았다는 이야기는 K - 2번째 계단을 밟지 않았다는 이야기
  const dp = Array.from({length: n + 1}, () => new Array(3).fill(0));

  // 초기 값으로 dp[1][1], [1][2]는 scores[0]으로 초기화한다.
  dp[1][1] = dp[1][2] = scores[0];
  
  for(let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]); // 아직 K 번째로 올라가지 않았을 때의 K - 1 최대값
    dp[i][1] = dp[i - 1][0] + scores[i - 1]; // K - 1번째 계단을 밟지 않고 K 번째로 올라섰을 때 최대값
    dp[i][2] = dp[i - 1][1] + scores[i - 1]; // K - 2번째 계단을 밟지 않고 K 번째로 올라섰을 때 최대값
  }

  // 연속해서 1번 밟아서 K 번째로 올라간 점수의 합과 연속해서 2번 밟아서 K 번째로 올라간 점수의 합 중 최대값을 반환
  return Math.max(dp[n][1], dp[n][2]);
}

const fs = require('fs');
const [n, ...scores] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(n, scores));