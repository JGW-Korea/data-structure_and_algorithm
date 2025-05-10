function solution(N, M, graph) {
  const virus = []; // 바이러스 위치

  // 현재 지도에 표시된 바이러스의 위치를 찾는다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 2) virus.push([i, j]);
    }
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = 0;

  function recursion(count) {
    // 종료 조건 => 벽을 총 3개 세웠을 시
    if (count === 3) {
      const changeGraph = graph.map((element) => [...element]);
      const visited = Array.from({ length: N }, () => new Array(M).fill(0));
      const queue = [...virus]; // 스프레드를 통해 값을 복사

      // 바이러스가 퍼질 수 있는 영역 구하기
      while (queue.length) {
        const [currentX, currentY] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

          if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
          if (!visited[nextX][nextY] && !changeGraph[nextX][nextY]) {
            visited[nextX][nextY] = 1;
            changeGraph[nextX][nextY] = 2;
            queue.push([nextX, nextY]);
          }
        }
      }

      let result = 0;
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (changeGraph[i][j] === 0) result += 1;
        }
      }

      answer = Math.max(answer, result);
      return;
    }

    // 벽을 놓을 수 있는 위치 확인
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (graph[x][y] === 0) {
          graph[x][y] = 1; // 벽을 세움
          recursion(count + 1);
          graph[x][y] = 0; // 벽 치움
        }
      }
    }
  }

  recursion(0);

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i < N + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}

console.log(solution(N, M, graph));
