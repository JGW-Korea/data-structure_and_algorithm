function solution(N, M) {
  const permutaion = new Array(M).fill(0); // M 길이의 수를 담는 배열
  const isUsed = new Array(N + 1).fill(0); // 1 ~ N 까지의 사용 유무 표시

  let answer = ""; // N^{M}개의 값을 담음

  function dfs(current) {
    if (current === M) {
      answer += permutaion.join(" ") + "\n";
      return;
    }

    for (let num = 1; num <= N; num++) {
      // 현재 번호를 사용하지 않고 있는 경우
      if (!isUsed[num]) {
        permutaion[current] = num;
        isUsed[num] = 1;
        dfs(current + 1);
        isUsed[num] = 0;
      }
    }
  }

  dfs(0); // 현재의 길이 (M까지 도달 시 M 길이가 담김)
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
