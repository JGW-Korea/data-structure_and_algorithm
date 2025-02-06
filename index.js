function solution(N) {
  // N x N 크기인 체스판을 일차원 배열로 표현
  // -> 각 index 위치의 1 ~ N의 값이 세로 위치를 나타내게 됨
  let board = new Array(N).fill(0);
  let answer = 0;

  // 현재 놓인 퀸들이 서로 공격할 수 있는지 확인
  function check(current) {
    for (let i = 0; i < current; i++) {
      // board[i] === board[current] : i번째 놓인 퀸과 current 위치에 놓인 퀸이 서로 공격할 수 있다는 의미
      // Math.abs(board[i] - board[current]) === current - i : i번째에 놓인 퀸과 current 위치에 놓인 퀸이 서로 대각선 위치로 공격할 수 있다는 의미
      if (
        board[i] === board[current] ||
        Math.abs(board[i] - board[current]) === current - i
      ) {
        return false;
      }
    }

    return true;
  }

  // 재귀를 통해 모든 조건을 확인함
  function dfs(currentLength) {
    // 모든 위치에 퀸을 놓게 될 경우 경우의 수를 1 증가시킨 후 이전 조건으로 되돌아감 (가로 구간)
    if (currentLength === N) {
      answer += 1;
      return;
    }

    // 반복문의 선언식을 통해 체스판 세로 구간을 표현
    for (let i = 1; i <= N; i++) {
      board[currentLength] = i; // 일단 currentLength(가로) x i(세로) 위치에 퀸을 둔다.

      // 각 위치에 둔 퀸들이 서로 공격할 수 있는지 파악한다.
      if (check(currentLength)) {
        dfs(currentLength + 1);
      }
    }
  }

  dfs(0); // 0 번째 위치부터 확인 (0 -> 가로 왼쪽의 체스 구간)

  return answer;
}

const fs = require("fs");
const [N] = fs
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(N));
