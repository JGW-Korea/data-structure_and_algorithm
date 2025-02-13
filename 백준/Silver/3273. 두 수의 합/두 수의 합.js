function solution(n, numbers, target) {
  let answer = 0; // 문제의 조건을 만족하는 쌍의 개수

  // 투 포인터 알고리즘을 위한 두 개의 포인터
  let p1 = 0;
  let p2 = n - 1;

  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2];

    // 두 수의 합이 x와 같을 경우
    if (sum === target) {
      answer += 1;
      p2 -= 1;
    }

    // 두 수의 합이 x보다 클 경우
    if (sum > target) p2 -= 1;
    else {
      p1 += 1;
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const target = Number(input[2]);

console.log(solution(N, numbers, target));
