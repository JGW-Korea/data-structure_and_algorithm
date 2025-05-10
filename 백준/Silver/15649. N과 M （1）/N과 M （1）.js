function solution(n, r) {
  // nPr
  // 올바른 형식
  // 1 2
  // 1 3
  // 1 4
  // 올바르지 않는 형식
  // 1 1
  // 1 2
  // 1 3
  // 1 4
  const permutation = new Array(r).fill(0); // 1 ~ N 까지의 값을 배열에다가 담아야 합니다.

  // N + 1 => 0 ~ 4 크기를 가지는 배열을 만든거고
  // index -> 1 ~ N 까지의 각 순서를 의미하게 되는거고
  // value -> 0 or 1 사용 유무를 판단하게 되는거고
  const isUsed = new Array(n + 1).fill(0);

  let answer = "";

  // for * 8 / r === 8
  // current === 8 === for

  function dfs(currentLength) {
    if (currentLength === r) {
      answer += permutation.join(" ") + "\n";
      return;
    }

    for (let num = 1; num <= N; num++) {
      if (!isUsed[num]) {
        permutation[currentLength] = num;
        isUsed[num] = 1;
        dfs(currentLength + 1); // 재귀 호출
        isUsed[num] = 0;
      }
    }
  }

  dfs(0);

  return answer;
}

const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(N, M));
