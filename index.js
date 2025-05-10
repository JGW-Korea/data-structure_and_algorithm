const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"]; // 흰색 체스판
const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"]; // 검은색 체스판

function solution(m, n, board) {
  let answer = Number.MAX_SAFE_INTEGER;

  function check(x, y) {
    let whiteCount = 0; // 흰색 개수
    let blackCount = 0; // 검은색 개수

    // -> 주어진 체스판을 기존 흰색, 검은색 체스판 규칙에 맞게 바꿔야 될 위치를 계산한다.
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (board[i][j] !== white[i - x][j - y]) whiteCount += 1;
        if (board[i][j] !== black[i - x][j - y]) blackCount += 1;
      }
    }

    return Math.min(whiteCount, blackCount); // 가장 적게 바꾼 바둑판으로 교체한다.
  }

  // -> 주어진 체스판과 기존 흰색, 검은 체스판 차이까지만 증가시킨다.
  for (let row = 0; row <= m - 8; row++) {
    for (let col = 0; col <= n - 8; col++) {
      answer = Math.min(answer, check(row, col));
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const board = input.slice(1).map((element) => element.split(""));

console.log(solution(M, N, board));
