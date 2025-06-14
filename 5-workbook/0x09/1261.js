const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(row, col, map) {
  // 방문 처리(이동한 거리) + 벽을 부순 회수
  const visited = Array.from({ length: col }, () => Array.from({ length: row }, () => false));
  visited[0][0] = true;

  const queue = [[0, 0, 0]]; // 현재 X, Y 위치 + 벽을 부순 회수

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // BFS 탐색
  while (queue.length) {
    const [currentX, currentY, broken] = queue.shift();

    if (currentX === col - 1 && currentY === row - 1) return broken;

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (nextX < 0 || nextY < 0 || nextX >= col || nextY >= row) continue; // 지도를 벗어난 경우 생략
      if (visited[nextX][nextY]) continue;

      // 지도를 벗어나지 않은 경우
      visited[nextX][nextY] = true;

      if (!map[nextX][nextY]) queue.unshift([nextX, nextY, broken]);
      else {
        queue.push([nextX, nextY, broken + 1]);
      }
    }
  }
}

// M -> 가로 크기
// N -> 세로 크기
const [M, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map((element) => element.split("").map(Number));

console.log(solution(M, N, map));
