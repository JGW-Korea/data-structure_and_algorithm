const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, K, garbage) {
  const map = Array.from({ length: N }, () => new Array(M).fill(0)); // 콘도미니엄 8층 구조를 먼저 정립한다.
  const visited = Array.from({ length: N }, () => new Array(M).fill(0)); // 콘도미니엄 8층 구조에 맞는 방문 처리 배열을 생성한다.

  // K개의 음식물 쓰레기의 좌표를 지도에 표시한다.
  for (const [x, y] of garbage) {
    map[x - 1][y - 1] = 1;
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 가장 큰 음식물 쓰레기의 크기를 구한다.
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 음식물이 존재하면서 아직 방문하지 위치
      if (map[i][j] === 1 && !visited[i][j]) {
        const queue = [[i, j]];

        let cnt = 1; // 음식물의 크기
        visited[i][j] = 1;

        // 뭉친 음식물의 크기를 구하는 BFS 탐색 로직
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let i = 0; i < 4; i++) {
            const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

            if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
            if (map[nextX][nextY] && !visited[nextX][nextY]) {
              cnt += 1;
              queue.push([nextX, nextY]);
              visited[nextX][nextY] = 1;
            }
          }
        }

        answer = Math.max(answer, cnt); // 선생님이 피해야 할 가장 큰 음식물 쓰레기 크기 갱신
      }
    }
  }

  return answer;
}

const [N, M, K] = input[0].split(" ").map(Number);
const garbage = input.slice(1).map((el) => el.split(" ").map(Number));

console.log(solution(N, M, K, garbage));
