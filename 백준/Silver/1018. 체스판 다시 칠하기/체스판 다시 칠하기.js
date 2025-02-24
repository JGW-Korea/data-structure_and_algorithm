function solution(M, N, board) {
  const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  function check(x, y) {
    let blackCount = 0;
    let whiteCount = 0;

    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (board[i][j] !== black[i - x][j - y]) blackCount += 1;
        if (board[i][j] !== white[i - x][j - y]) whiteCount += 1;
      }
    }

    return Math.min(blackCount, whiteCount);
  }

  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
      answer = Math.min(answer, check(i, j));
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const board = input.slice(1).map((element) => element.split(""));

console.log(solution(M, N, board));
