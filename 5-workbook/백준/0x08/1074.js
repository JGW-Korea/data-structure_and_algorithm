function solution(n, r, c) {
  let result = 0;

  function dfs(row, col, size) {
    if (size === 1) {
      // base case: size가 1일 때
      if (row === r && col === c) {
        return;
      }
      result++;
      return;
    }

    let half = size / 2;

    // 찾고자 하는 좌표가 어떤 사분면에 있는지 판단합니다.
    if (r < row + half && c < col + half) {
      // 1사분면
      dfs(row, col, half);
    } else if (r < row + half && c >= col + half) {
      // 2사분면
      result += half * half;
      dfs(row, col + half, half);
    } else if (r >= row + half && c < col + half) {
      // 3사분면
      result += 2 * half * half;
      dfs(row + half, col, half);
    } else {
      // 4사분면
      result += 3 * half * half;
      dfs(row + half, col + half, half);
    }
  }

  dfs(0, 0, 2 ** n);

  return result;
}

const fs = require("fs");
const [N, R, C] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(solution(N, R, C));
