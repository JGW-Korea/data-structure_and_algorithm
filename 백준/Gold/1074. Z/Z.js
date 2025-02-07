function solution(n, r, c) {
  let res = 0;

  function dfs(row, col, size) {
    if (row === r && col === c) {
      // 좌표 찾음
      console.log(res);
      return;
    }
    if (r >= row && r < row + size && c >= col && c < col + size) {
      // 영역 내에 있음
      size = parseInt(size / 2);
      dfs(row, col, size);
      dfs(row, col + size, size);
      dfs(row + size, col, size);
      dfs(row + size, col + size, size);
    } else res += size * size; // 좌표 못 찾음!
  }

  dfs(0, 0, Math.pow(2, n));
}

const fs = require('fs');
const [N, R, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

solution(N, R, C);