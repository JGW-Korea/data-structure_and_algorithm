function solution(land) {
  const [n, m] = [land.length, land[0].length];

  // BFS 방문 처리를 위한 2차원 배열
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));

  // 상하좌우 이동
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const oilPerCol = new Array(m).fill(0); // 열별 석유량 누적 저장 배열

  // 가로로 이동하면서 시추관을 설치할 위치 찾기
  for (let x = 0; x < n; x++) {
    // 시추관을 설치한 위치 아래로 끝까지 뻗어감
    for (let y = 0; y < m; y++) {
      if (land[x][y] && !visited[x][y]) {
        const queue = [[x, y]];
        const cols = new Set([y]);

        visited[x][y] = 1;
        let size = 1;

        // BFS 탐색 순회
        while (queue.length) {
          const [currentX, currentY] = queue.shift();

          for (let i = 0; i < 4; i++) {
            const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;
            if (land[nextX][nextY] && !visited[nextX][nextY]) {
              visited[nextX][nextY] = 1;
              size += 1;

              cols.add(nextY);
              queue.push([nextX, nextY]);
            }
          }
        }

        // 석유 덩어리가 포함된 모든 열에 양을 더함
        for (const col of cols) {
          oilPerCol[col] += size;
        }
      }
    }
  }

  return Math.max(...oilPerCol);
}
