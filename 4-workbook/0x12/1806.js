const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, S, numbers) {
  let [p1, p2] = [0, 0]; // 두 개의 포인터 지정
  let answer = Number.MAX_SAFE_INTEGER;

  // 투 포인터 알고리즘 수행 -> O(N) -> N의 최대값 100,000 -> 0.5초 이내에 수행 가능
  let sum = 0;
  while (p2 < N) {
    sum += numbers[p2]; // sum을 오른쪽 포인터를 늘려가며 합을 키움

    // sum이 S 이상이 될 때까지 왼쪽 포인터를 줄여가며 최소 길이 탐색
    while (sum >= S) {
      sum -= numbers[p1];
      answer = Math.min(answer, p2 - p1 + 1);
      p1 += 1;
    }

    p2 += 1;
  }

  return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
}

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
console.log(solution(N, S, numbers));
