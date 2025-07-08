const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, map) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(-1)); // 방문처리를 위한 2차원 배열을 생성한다.

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(currentX, currentY) {
    if (visited[currentX][currentY] === -1) {
      visited[currentX][currentY] = 0;

      for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
        if (map[currentX][currentY] < map[nextX][nextY]) {
          visited[currentX][currentY] = Math.max(visited[currentX][currentY], dfs(nextX, nextY));
        }
      }
    }

    return visited[currentX][currentY] + 1;
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      answer = Math.max(answer, dfs(i, j));
    }
  }

  return answer;
}

const N = Number(input[0]);
const map = input.slice(1).map((el) => el.split(" ").map(Number));
console.log(solution(N, map));
