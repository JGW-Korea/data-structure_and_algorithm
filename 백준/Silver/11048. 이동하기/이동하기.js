function solution(N, M, board) {
  const dp = Array.from({ length: N }, () => Array(M).fill(0));

  dp[0][0] = board[0][0];

  // 첫 번째 행의 사탕을 채운다.
  for(let i = 1; i < M; i++) {
    dp[0][i] = dp[0][i - 1] + board[0][i];
  }

  // 첫 번째 열의 사탕을 채운다.
  for(let i = 1; i < N; i++) {
    dp[i][0] = dp[i - 1][0] + board[i][0];
  }

  // 나머지 행과 열의 사탕 개수를 채운다.
  for(let i = 1; i < N; i++) {
    for(let j = 1; j < M; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + board[i][j];
    }
  }

  return dp[N - 1][M - 1];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(element => element.split(' ').map(Number));

console.log(solution(N, M, board));