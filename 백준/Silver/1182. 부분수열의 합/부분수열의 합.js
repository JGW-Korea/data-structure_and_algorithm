function solution(n, s, numbers) {
  let answer = 0;

  // 부분 수열의 모든 원소를 더한 값이 S가 되는 모든 경우의 수를 구하는 로직
  function recursion(current, total) {
    if (current === n) {
      if (total === s) answer += 1;
      return;
    }

    recursion(current + 1, total);
    recursion(current + 1, total + numbers[current]);
  }

  recursion(0, 0);

  return s === 0 ? answer - 1 : answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

console.log(solution(N, S, numbers));
