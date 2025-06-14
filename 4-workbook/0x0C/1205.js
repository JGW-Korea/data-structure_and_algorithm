const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, newScore, p, ranks, currentRank) {
  if (n === p && ranks[n - 1][0] >= newScore) return -1; // 태수의 점수가 랭킹 리스트에 들어가지 못할 경우
  if (n === 0) return 1; // 현재 랭킹 리스트에 점수가 아예 없는 상황일 경우

  // 점수가 들어가지 못하는 경우는 위에서 예외로 걸리짐
  let left = 0;
  let right = p - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (ranks[mid][0] === newScore && !(ranks[mid][0] === 0 && ranks[mid][1] === 0)) return ranks[mid][1];

    if (ranks[mid][0] <= newScore) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return ranks[left][1] === 0 ? currentRank : ranks[left][1];
}

const [N, newScore, P] = input[0].split(" ").map(Number);

// 랭킹 리스트 정보 저장
const ranks = Array.from({ length: P }, () => [0, 0]);
let rank = 2;
if (input[1]) {
  let list = input[1].split(" ").map(Number);

  ranks[0][0] = list[0];
  ranks[0][1] = rank - 1;

  for (let i = 1; i < list.length; i++) {
    // 현재 점수가 이전 점수와 동일한 점수일 경우 -> 등수를 동일하게 매김
    if (ranks[i - 1][0] === list[i]) {
      ranks[i][0] = ranks[i - 1][0];
      ranks[i][1] = ranks[i - 1][1];
    }

    // 현재 점수가 이전 점수와 동일하지 않을 경우 -> 누적된 등수를 매김
    else {
      ranks[i][0] = list[i];
      ranks[i][1] = rank;
    }

    rank += 1;
  }
}

console.log(solution(N, newScore, P, ranks, rank));
