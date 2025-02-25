function solution(M, N, graph) {
  // 방문 처리를 위한 배열 NxM 크기의 이차원 배열을 생성한다.
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));
  const queue = []; // 시작 위치가 명시되어 있지 않기 때문에 큐를 생성만 한다.

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let count = 0; // 흰색 지렁이 개수

  // 시작 위치를 찾기 위해 2중 반복문을 수행한다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 배추가 심어진 곳을 확인 후 해당 위치를 방문하지 않았을 경우
      if (graph[i][j] && !visited[i][j]) {
        visited[i][j] = 1; // 해당 위치를 방문처리를 한다.
        queue.push([i, j]); // BFS 탐색을 위해 큐에 시작 위치를 추가한다.

        count += 1; // 흰색 지렁이를 한 마리 추가한다.

        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let move = 0; move < 4; move++) {
            const [nextX, nextY] = [currentX + dx[move], currentY + dy[move]];

            if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
            if (graph[nextX][nextY] && !visited[nextX][nextY]) {
              visited[nextX][nextY] = 1;
              queue.push([nextX, nextY]);
            }
          }
        }
      }
    }
  }

  return count;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let tc = Number(input[0]);
let answer = "";
let idx = 1;

// 각 Test Case의 흰색지렁이 최소 개수를 확인한다.
for (let i = 0; i < tc; i++) {
  const [M, N, K] = input[idx++].split(" ").map(Number); // 밭의 크기와 배추가 심어진 위치의 개수를 가져온다.

  // 밭의 크기를 지정한다.
  const graph = Array.from({ length: N }, () => new Array(M).fill(0));

  // 배추가 심어진 위치를 1로 표시한다.
  for (let pos = 0; pos < K; pos++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    graph[y][x] = 1;
  }

  answer += solution(M, N, graph) + "\n";
}

console.log(answer);
