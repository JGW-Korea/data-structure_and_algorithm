const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, map) {
  let island = 2; // 섬의 개수

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 각 섬에 번호를 매기는 BFS 탐색
  function labelIsIslandWithBfs(x, y, label) {
    const queue = [[x, y]];
    map[x][y] = label;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

        if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
        if (map[nextX][nextY] === 1) {
          queue.push([nextX, nextY]);
          map[nextX][nextY] = label;
        }
      }
    }
  }

  // 두 섬을 연결하는 다리 중 가장 길이가 짧은 다리 길이 구하는 BFS 탐색
  function getShortest() {
    let bridgeLength = Infinity;

    // 섬을 차례대로 방문하면서 각 섬의 다리 길이 구함
    for (let islandLabel = 2; islandLabel < island + 1; islandLabel++) {
      const visited = Array.from({ length: N }, () => new Array(N).fill(0));

      // 섬의 전체 크기를 기준으로 큐 초기화 -> BFS 탐색을 수행하면 자동으로 섬의 가장 자리만 탐색이 수행됨
      const queue = [];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (map[i][j] === islandLabel) {
            queue.push([i, j, 0]);
            visited[i][j] = 1;
          }
        }
      }

      // BFS 탐색 순회
      while (queue.length) {
        const [currentX, currentY, dist] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

          if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;

          // 현재 섬이 아닌 다른 섬을 방문했을 경우 다리 길이 갱신
          if (map[nextX][nextY] && map[nextX][nextY] !== islandLabel) bridgeLength = Math.min(bridgeLength, dist);
          else if (!map[nextX][nextY] && !visited[nextX][nextY]) {
            // 다음 위치가 바다이면서, 아직 방문하지 않았을 경우
            queue.push([nextX, nextY, dist + 1]);
            visited[nextX][nextY] = dist + 1;
          }
        }
      }
    }

    return bridgeLength;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) labelIsIslandWithBfs(i, j, island++);
    }
  }

  return getShortest();
}

const N = Number(input[0]);
const map = input.slice(1).map((el) => el.split(" ").map(Number));
console.log(solution(N, map));
