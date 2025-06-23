function solution(n, numbers) {
  const plusArr = numbers.filter((number) => number > 0).sort((a, b) => b - a); // 주어진 N개의 수 중에서 양수만 추출
  const minusArr = numbers.filter((number) => number <= 0).sort((a, b) => a - b); // 주어진 N개의 수 중에서 음수만 추출

  let answer = 0;

  // 양수 수열의 합을 구함
  for (let i = 0; i < plusArr.length; i += 2) {
    if (i === plusArr.length - 1) answer += plusArr[i]; // 수가 하나만 남은 경우
    else if (plusArr[i] * plusArr[i + 1] > plusArr[i] + plusArr[i + 1])
      answer += plusArr[i] * plusArr[i + 1]; // 두 수를 묶은 값이 그냥 더한 값보다 큰 경우
    else {
      answer += plusArr[i] + plusArr[i + 1]; // 위 조건이 아무것도 해당되지 않을 경우
    }
  }

  // 음수 수열의 합을 구함
  for (let i = 0; i < minusArr.length; i += 2) {
    if (i === minusArr.length - 1) answer += minusArr[i];
    else {
      answer += minusArr[i] * minusArr[i + 1]; // 음수는 무조건 수를 묶을 수 있으면 묶어야 함(음수 * 음수 = 양수)
    }
  }

  return answer;
}

const [N, ...rest] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);
console.log(solution(N, rest));
