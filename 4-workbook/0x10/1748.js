function solution(N) {
  if (N < 10) return N; // 10의 이하의 수는 N만큼의 새로운 수를 가지게 된다.

  let answer = 9;

  // N = 10 ~ 100,000,000의 값을 새로운 수로 표현할 경우
  for (let start = 10, len = 2; start < N + 1; start *= 10, len++) {
    // start -> 십, 백, 천 자릿수 중 어디에 해당되는지
    // len -> 현재 수의 자릿수
    let end = start * 10 - 1; // end -> 현재 start 범위의 마지막 수

    // 현재 start 범위의 마지막 수가 N보다 클 경우 N 값으로 줄인다.
    if (end >= N) {
      end = N;
    }

    // 현재 자릿수의 최대 개수와 자릿수의 길이를 곱한 값을 더한다.
    answer += (end - (start - 1)) * len;
  }

  return answer;
}

const N = Number(require("fs").readFileSync("index.txt").toString().trim());
console.log(solution(N));
