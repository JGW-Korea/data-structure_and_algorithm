function solution(N, map) {
  let island = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // BFS 알고리즘 로직
  function bfs(x, y, count) {
    const queue = [];
    queue.push([x, y]);

    map[x][y] = count;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
        if (map[nextX][nextY] === 1) {
          queue.push([nextX, nextY]);
          map[nextX][nextY] = count;
        }
      }
    }
  }

  // 섬 간의 최단 거리를 찾는 함수
  function getShortest() {
    let result = Infinity;

    for (let count = 2; count <= island; count++) {
      const visited = Array.from({ length: N }, () => new Array(N).fill(0));
      const queue = [];

      // 섬을 차례대로 방문하면서 섬의 좌표와 거리를 큐 자료구조에 담는다.
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (map[i][j] === count) {
            queue.push([i, j, 0]);
            visited[i][j] = 1;
          }
        }
      }

      // BFS 탐색을 시작한다.
      while (queue.length) {
        const [currentX, currentY, dist] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

          if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;

          if (map[nextX][nextY] && map[nextX][nextY] !== count) {
            result = Math.min(result, dist);
          } else if (!map[nextX][nextY] && !visited[nextX][nextY]) {
            queue.push([nextX, nextY, dist + 1]);
            visited[nextX][nextY] = dist + 1;
          }
        }
      }
    }

    return result;
  }

  // 섬의 개수를 세고, 각 섬에 번호를 매긴다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) bfs(i, j, ++island);
    }
  }

  return getShortest(); // 가장 짧은 다리를 반환한다.
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const N = Number(input[0]);
const map = Array.from({ length: N }, () => []);

for (let i = 1; i <= N; i++) {
  map[i - 1] = input[i].split(" ").map(Number);
}

console.log(solution(N, map));
