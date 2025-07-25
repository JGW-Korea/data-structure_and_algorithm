const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, board) {
  // 최소 / 최대값을 담을 두 개의 DP 테이블을 성립
  const maxValueTable = Array.from({ length: 3 }, () => 0);
  const minValueTable = Array.from({ length: 3 }, () => Infinity);

  // DP 테이블 초기식 성립
  minValueTable[0] = maxValueTable[0] = board[0][0];
  minValueTable[1] = maxValueTable[1] = board[0][1];
  minValueTable[2] = maxValueTable[2] = board[0][2];

  // console.log(minValueTable);

  const leftValueReturn = (value, isMax = false) => {
    if (isMax) return Math.max(maxValueTable[0], maxValueTable[1]) + value;
    return Math.min(minValueTable[0], minValueTable[1]) + value;
  };

  const midValueReturn = (value, isMax = false) => {
    if (isMax) return Math.max(maxValueTable[0], maxValueTable[1], maxValueTable[2]) + value;
    return Math.min(minValueTable[0], minValueTable[1], minValueTable[2]) + value;
  };

  const rightValueReturn = (value, isMax = false) => {
    if (isMax) return Math.max(maxValueTable[1], maxValueTable[2]) + value;
    return Math.min(minValueTable[1], minValueTable[2]) + value;
  };

  // DP식 성립
  for (let i = 1; i < N; i++) {
    const [left, mid, right] = board[i];

    // 최대값 계산
    [maxValueTable[0], maxValueTable[1], maxValueTable[2]] = [
      leftValueReturn(left, true),
      midValueReturn(mid, true),
      rightValueReturn(right, true),
    ];

    // 최소값 계산
    [minValueTable[0], minValueTable[1], minValueTable[2]] = [
      leftValueReturn(left),
      midValueReturn(mid),
      rightValueReturn(right),
    ];
  }

  return Math.max(...maxValueTable) + " " + Math.min(...minValueTable);
}

const N = Number(input[0]);
const board = input.slice(1).map((el) => el.split(" ").map(Number));
console.log(solution(N, board));
