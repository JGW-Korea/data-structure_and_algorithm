function solution(n, m, graph) {
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = 0; // 흰 지렁이 개수

  // 시작 위치를 모르기 때문에 N x M을 순회하면서 배추가 심어진 곳을 시작 위치로 삼고 BFS 탐색을 진행한다.
  // 단, 방문 처리는 초기화 되면 안되기 때문에 미리 선언을 해야 한다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 1은 참으로 평가되는 값 Truthy 값이기 때문에 비교 연산자를 사용하지 않는다.
      if (graph[i][j] && !visited[i][j]) {
        visited[i][j] = 1;
        const queue = [[i, j]];

        answer += 1; // 흰 지렁이는 상하좌우의 배추에 모두 이동할 수 있기 때문에 결과적으로는 한 마리만 증가한다.

        // BFS 탐색 로직
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let move = 0; move < 4; move++) {
            const [nextX, nextY] = [currentX + dx[move], currentY + dy[move]];

            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
            if (graph[nextX][nextY] && !visited[nextX][nextY]) {
              visited[nextX][nextY] = 1;
              queue.push([nextX, nextY]);
            }
          }
        }
      }
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let answer = "";
let idx = 1;

for (let tc = 0; tc < T; tc++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [col, row] = input[idx++].split(" ").map(Number);
    graph[row][col] = 1;
  }

  answer += solution(N, M, graph) + "\n";
}

console.log(answer);
