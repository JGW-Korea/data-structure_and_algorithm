const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(K, W, H, graph) {
  // 방문 처리 배열의 크기를 H x W x (K + 1)로 지정한다.
  // -> K번만큼 뛸 수 있기 떄문에 다차원 배열로 설정한다. -> 0이면 아직 K[i]가 0이면 아직 K번만큼 뛰지 않았다는 의미
  const visited = Array.from({ length: H }, () => Array.from({ length: W }, () => new Array(K + 1).fill(0)));
  for (let i = 0; i < K + 1; i++) {
    visited[0][0][i] = 1;
  }

  const queue = [[0, 0, 0]]; // BFS 탐색을 위한 큐 자료구조

  // 이동 방향 -> 상화좌우
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 이동 방향 -> 말의 움직임
  const moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
  ];

  const isRangeError = (x, y) => x < 0 || y < 0 || x >= H || y >= W;

  // graph.forEach((el) => console.log(el.join(" ")));
  // console.log();

  // BFS 탐색
  while (queue.length) {
    const [currentX, currentY, cnt] = queue.shift();

    // 도착 지점에 도달한 경우
    if (currentX === H - 1 && currentY === W - 1) {
      return visited[currentX][currentY][cnt] - 1;
    }

    // 1. 먼저 말의 움직임을 먼저 구함
    if (cnt < K) {
      for (const move of moves) {
        const [nextX, nextY] = [currentX + move[0], currentY + move[1]];

        if (isRangeError(nextX, nextY)) continue;
        if (!visited[nextX][nextY][cnt + 1] && !graph[nextX][nextY]) {
          visited[nextX][nextY][cnt + 1] = visited[currentX][currentY][cnt] + 1;
          queue.push([nextX, nextY, cnt + 1]);
        }
      }
    }

    // 2. 상하좌우로 이동한 경우
    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (isRangeError(nextX, nextY)) continue;
      if (!visited[nextX][nextY][cnt] && !graph[nextX][nextY]) {
        visited[nextX][nextY][cnt] = visited[currentX][currentY][cnt] + 1;
        queue.push([nextX, nextY, cnt]);
      }
    }
  }

  return -1;
}

const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
const graph = input.slice(2).map((el) => el.split(" ").map(Number));

console.log(solution(K, W, H, graph));
