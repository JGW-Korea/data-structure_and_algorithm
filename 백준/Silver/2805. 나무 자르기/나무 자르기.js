function solution(N, M, trees) {
  let left = 1;
  let right = Math.max(...trees);
  let answer = 0;

  while(left <= right) {
    let height = 0;
    let mid = Math.floor((left + right) / 2);

    for(let i = 0; i < N; i++) {
      if(trees[i] > mid) {
        height += trees[i] - mid;
      }
    }

    if(height >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

console.log(solution(N, M, trees));