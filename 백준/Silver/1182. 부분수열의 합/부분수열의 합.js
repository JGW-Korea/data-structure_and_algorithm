function solution(n, s, numbers) {
  let answer = 0;

  function recursion(index, sum) {
    // 빈 부분 수열을 제외하고 합이 정확히 s인 경우만 카운트
    if (sum === s && index > 0) {
      answer += 1;
    }

    // 현재 인덱스에서 시작하여 모든 가능한 부분 수열을 탐색
    for (let i = index; i < n; i++) {
      recursion(i + 1, sum + numbers[i]);
    }
  }

  recursion(0, 0);
  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

console.log(solution(N, S, numbers));