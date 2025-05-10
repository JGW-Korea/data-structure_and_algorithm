// 블로그를 시작한지 -> N일이 지남
// 누적 방문 수가 6만을 넘음
// 찬솔이는 X일 동안 가장 많이 들어온 방문자 수와 그 기간들을 알고 싶다.
// 찬솔이를 대신해서 X일 동안 가장 많이 들어온 방문자 수와 기간이 몇 개 있는지 구해주자

// 첫번째 Input -> [N, X]
// 두번째 Input -> Array.from({ length: N + 1 }, () => day)

// 출력 -> X일 동안 가장 많이 들어온 방문자 수 or 0명일 경우 SAD를 출력
//     -> 0명이 아닐 경우 기간이 몇 개 있는지 출력

function solution(n, x, visited) {
  let sum = 0;

  // 초기 상태
  for (let i = 0; i < x; i++) {
    sum += visited[i];
  }

  let maxSum = sum;
  let period = 1; // 기간을 1 더함

  for (let i = x; i < n; i++) {
    sum = sum - visited[i - x] + visited[i];

    if (sum > maxSum) {
      maxSum = sum;
      period = 1;
    } else if (sum === maxSum) {
      period += 1;
    }
  }

  if (maxSum === 0) return "SAD";
  else {
    return maxSum + "\n" + period;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visiteds = input[1].split(" ").map(Number);

console.log(solution(N, X, visiteds));
