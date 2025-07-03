const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, paint) {
  const visited = Array.from({ length: N }, () => new Array(M).fill(0)); // BFS 방문 처리를 위한 2차원 배열
  const answer = [0, 0];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 그림의 개수와 그림 중 넓이가 가장 넓은 것의 넓이를 출력해야 하기 때문에 시작 노드를 지정해주지 않음
  // 이로 인해 N x M을 탐색하면서 그림으로 연결된 1로 찾아 BFS를 순회해야 한다.
  // 시간 복잡도 -> O(N x M)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && paint[i][j]) {
        answer[0] += 1; // 그림의 개수 증가
        visited[i][j] = 1; // BFS 알고리즘을 위한 방문 처리

        const queue = [[i, j]]; // BFS 탐색을 위한 큐 자료구조 생성 및 초기화

        // BFS 탐색 수행
        let width = 1;
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let move = 0; move < 4; move++) {
            const [nextX, nextY] = [currentX + dx[move], currentY + dy[move]];

            if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
            if (!visited[nextX][nextY] && paint[nextX][nextY]) {
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

const [N, M] = input[0].split(" ").map(Number);
const paint = input.slice(1).map((el) => el.split(" ").map(Number));
console.log(solution(N, M, paint));
