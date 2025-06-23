function solution(n, numbers) {
  const plusArr = numbers.filter((el) => el > 0).sort((a, b) => b - a); // 양수만 추출 후 내림차순 정렬 -> 큰 값들의 수열의 합을 먼저 구하기 위해서
  const minusArr = numbers.filter((el) => el <= 0).sort((a, b) => a - b); // 음수만 추출 후 오름차순 정렬 -> 음수 중에서의 큰 값들의 수열의 합을 먼저 구하기 위해서

  let answer = 0;

  // 양수의 수열의 합 구함
  for (let i = 0; i < plusArr.length; i += 2) {
    if (i === plusArr.length - 1) answer += plusArr[i]; // 남은 마지막 수는 묶을 수 없기 때문에 더해준다.
    else if (plusArr[i] * plusArr[i + 1] > plusArr[i] + plusArr[i + 1])
      answer += plusArr[i] * plusArr[i + 1]; // 묶은 수가 더 클 경우 두 수를 묶는다.
    else {
      answer += plusArr[i] + plusArr[i + 1]; // 위 조건이 모두 위배될 시 그냥 두 수를 더한다.
    }
  }

  // 음수의 수열의 합 구함
  for (let i = 0; i < minusArr.length; i += 2) {
    if (i === minusArr.length - 1) answer += minusArr[i]; // 남은 마지막 수는 묶을 수 없기 때문에 더해준다.
    else {
      answer += minusArr[i] * minusArr[i + 1]; // 음수는 더하게 되면 음수로 유지되기 때문에 무조건 묶어서 계산한다.
    }
  }

  return answer;
}

const [N, ...rest] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);
console.log(solution(N, rest));
