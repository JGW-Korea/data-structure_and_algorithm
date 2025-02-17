const fs = require("fs");

function solve(input) {
  const lines = input.trim().split("\n");
  const t = parseInt(lines[0]);
  let lineIdx = 1;

  // 8가지 움직임에 해당하는 동전의 인덱스(0~8)를 비트마스크로 미리 계산합니다.
  const moveMasks = [];
  // 행 3개
  moveMasks.push((1 << 0) | (1 << 1) | (1 << 2)); // 행 0
  moveMasks.push((1 << 3) | (1 << 4) | (1 << 5)); // 행 1
  moveMasks.push((1 << 6) | (1 << 7) | (1 << 8)); // 행 2
  // 열 3개
  moveMasks.push((1 << 0) | (1 << 3) | (1 << 6)); // 열 0
  moveMasks.push((1 << 1) | (1 << 4) | (1 << 7)); // 열 1
  moveMasks.push((1 << 2) | (1 << 5) | (1 << 8)); // 열 2
  // 대각선 2개
  moveMasks.push((1 << 0) | (1 << 4) | (1 << 8)); // 주대각선
  moveMasks.push((1 << 2) | (1 << 4) | (1 << 6)); // 반대각선

  const FULL = (1 << 9) - 1; // 모든 동전이 T인 상태 (511)
  const results = [];

  for (let tc = 0; tc < t; tc++) {
    let state = 0;
    // 3줄의 보드 정보를 읽으며 동전 상태를 9비트 정수로 표현합니다.
    for (let i = 0; i < 3; i++) {
      const row = lines[lineIdx++].replace(/\s/g, "");
      for (let j = 0; j < 3; j++) {
        // 동전이 'T'이면 해당 비트를 1로 설정 (H는 0)
        if (row[j] === "T") {
          state |= 1 << (i * 3 + j);
        }
      }
    }

    let minMoves = Infinity;
    // 8가지 움직임에 대해 0 ~ 255 (2^8 - 1) 모든 경우를 완전 탐색합니다.
    for (let mask = 0; mask < 1 << 8; mask++) {
      let effect = 0;
      // 선택한 움직임들의 누적 효과를 XOR으로 계산합니다.
      for (let move = 0; move < 8; move++) {
        if (mask & (1 << move)) {
          effect ^= moveMasks[move];
        }
      }
      const newState = state ^ effect;
      // 결과 상태가 모두 H(0) 또는 모두 T(511)라면 정답 후보입니다.
      if (newState === 0 || newState === FULL) {
        // 사용한 움직임의 개수를 센다 (popcount)
        let movesCount = 0;
        let tmp = mask;
        while (tmp) {
          movesCount += tmp & 1;
          tmp >>= 1;
        }
        minMoves = Math.min(minMoves, movesCount);
      }
    }

    results.push(minMoves === Infinity ? -1 : minMoves);
  }

  console.log(results.join("\n"));
}

const input = fs.readFileSync("/dev/stdin", "utf8");
solve(input);
