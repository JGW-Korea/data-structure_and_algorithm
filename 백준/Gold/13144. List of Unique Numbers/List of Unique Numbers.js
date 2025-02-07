function solution(N, numbers) {
  const isUsed = new Array(Math.max(...numbers)).fill(false); // 동일한 수가 2번 이상 나오지 않게 하기 위한 사용 유무 판단 배열

  let end = 0; // 투 포인터를 사용할 것이지만 사실, 끝 지점을 가리키는 포인터 하나만 필요하다.
  let answer = 0; // 같은 수가 여러번 등장하지 않는 경우의 수

  // for 반복문을 통해 각 수마다 같은 수가 여러번 등장하지 않는 경우의 수를 구할 수 있다.
  for(let i = 0; i < N; i++) {
    // end가 N보다 작으면서 end가 가리키는 수를 사용하고 있지 않을때까지 반복한다.
    while(end < N && !isUsed[numbers[end]]) {
      isUsed[numbers[end++]] = true; // 사용하고 있다고 표시한다.
    }

    answer += end - i; // end - i를 통해서 각 수의 경우의 수를 계산할 수 있다.
    isUsed[numbers[i]] = false; // i번째가 가리키는 수를 사용하고 있지 않다고 표시한다.
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

console.log(solution(N, numbers));