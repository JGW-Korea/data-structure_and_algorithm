function solution(N, M, graph) {
  const answer = [0, 0]; // answer에 그림의 개수와 가장 큰 넓이를 가진 그림의 값을 저장한다.
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 시작 정점이 주어지지 않기 때문에 반복문을 순회하면서 아직 방문하지 않은 그림의 위치를 시작점으로 세운다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        const queue = [[i, j]]; // 큐에 시작 위치를 삽입한다.
        visited[i][j] = 1; // 방문 처리를 한다.

        answer[0] += 1; // 그림의 개수를 증가한다.
        let width = 1;

        // BFS 탐색 로직
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let move = 0; move < 4; move++) {
            const [nextX, nextY] = [currentX + dx[move], currentY + dy[move]];

            if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
            if (graph[nextX][nextY] && !visited[nextX][nextY]) {
              width += 1;
              visited[nextX][nextY] = 1;
              queue.push([nextX, nextY]);
            }
          }
        }

        answer[1] = Math.max(answer[1], width);
      }
    }
  }

  return answer.join("\n");
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((element) => element.split(" ").map(Number));

console.log(solution(N, M, graph));
