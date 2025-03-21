function solution(N, map) {
  let dp = Array.from({ length: N }, () => new Array(N).fill(-1));
  let answer = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y) {
    if (dp[x][y] === -1) {
      dp[x][y] = 0;

      for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [x + dx[i], y + dy[i]];

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
        if (map[nextX][nextY] > map[x][y]) {
          dp[x][y] = Math.max(dp[x][y], dfs(nextX, nextY));
        }
      }
    }

    return dp[x][y] + 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      answer = Math.max(answer, dfs(i, j));
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map((element) => element.split(" ").map(Number));

console.log(solution(N, map));