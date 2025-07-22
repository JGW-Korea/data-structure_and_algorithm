const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(R, C, board) {
  const convertAlphaNumber = (x, y) => board[x][y].charCodeAt() - 65; // 대문자 알파벳 10진수 값 반환

  const visited = Array.from({ length: 26 }, () => false); // 알파벳을 사용하고 있는지 유무 판단

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(currentX, currentY, count) {
    let maxCount = count;

    visited[convertAlphaNumber(currentX, currentY)] = true; // A~Z까지 알파벳 사용 체크

    // DFS 순회
    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (nextX < 0 || nextY < 0 || nextX >= R || nextY >= C) continue;
      if (!visited[convertAlphaNumber(nextX, nextY)]) {
        maxCount = Math.max(maxCount, dfs(nextX, nextY, count + 1));
      }
    }

    visited[convertAlphaNumber(currentX, currentY)] = false; // A~Z까지 알파벳 사용 유무 판단
    return maxCount;
  }

  return dfs(0, 0, 1);
}

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((el) => el.split(""));
console.log(solution(R, C, board));
