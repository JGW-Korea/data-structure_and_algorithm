function solution(N, ranks) {
  ranks.sort((a, b) => a - b); // 주어진 예상 등수를 오름차순으로 정렬한다.

  let answer = 0; // 불만도의 누적합

  // 예상 등수와 실제 등수의 차이를 구한다.
  for(let i = 0; i < N; i++) {
    if(ranks[i] !== (i + 1)) {
      answer += Math.abs(ranks[i] - (i +  1)); // 불만도의 차이는 절대값 A - B를 통해서 구할 수 있다.
    }
  }

  return answer;
}

const fs = require('fs');
const [N, ...ranks] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(solution(N, ranks));