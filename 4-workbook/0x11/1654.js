const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(K, N, numbers) {
  let answer = 0;

  // 파라메트릭 서치를 위한 왼쪽, 오른쪽 기준값
  let left = 0;
  let right = Math.max(...numbers);

  // 이진탐색 수행
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;

    // 주어진 K개의 랜선을 모두 같은 길이로 나눴을 때 나온 랜선의 수
    for (const number of numbers) {
      sum += Math.floor(number / mid);
    }

    if (sum < N) right = mid - 1;
    else {
      left = mid + 1;
      answer = Math.max(answer, mid);
    }
  }

  return answer;
}

const [K, N] = input[0].split(" ").map(Number);
const numbers = input.slice(1).map(Number);
console.log(solution(K, N, numbers));
