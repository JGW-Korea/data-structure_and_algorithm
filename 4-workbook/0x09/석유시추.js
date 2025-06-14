// 1. N x M 크기의 땅 속에서 석유가 여러 덩어리로 나누어 묻혀있다.
// 2. 시추관을 수직으로 단 하나만 뚫을 수 있을 경우 가장 많은 석유를 뽑을 수 있는 위치를 찾으시오.

function solution(land) {
  const [n, m] = [land.length, land[0].length]; // 지도의 크기를 구조 분해 할당을 통해 가져옴

  // BFS 탐색을 위한 방문 처리 배열(2차원), 이동(상하좌우) 배열
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 열 방향으로 이동 시 최대 석유량을 저장하는 1차원 배열(누적합)
  const oilPerCol = new Array(m).fill(0);

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      // 석유 매장지임과 동시에 방문하지 않은 위치일 경우
      if (land[x][y] && !visited[x][y]) {
        const queue = [[x, y]];
        const cols = new Set([y]); // 해당 위치에서 방문할 수 있는 열 집합을 저장

        let size = 1;
        visited[x][y] = 1;

        // BFS 탐색
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          // 상하좌우 이동
          for (let i = 0; i < 4; i++) {
            const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
            if (land[nextX][nextY] && !visited[nextX][nextY]) {
              visited[nextX][nextY] = 1;
              queue.push([nextX, nextY]);
              size += 1;
              cols.add(nextY);
            }
          }
        }

        // 석유 매장지 값 누적
        for (const col of cols) {
          oilPerCol[col] += size;
        }
      }
    }
  }

  return Math.max(...oilPerCol); // 석유 매장지 중 최대 값을 반환
}
