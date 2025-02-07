function solution(title, power) {
  let left = 0;
  let right = title.length - 1;

  // 캐릭터의 전투력
  let answer = '';

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);

    // 유저의 전투력이 칭호의 전투력보다 낮은지 판별
    if(Number(title[mid][1]) >= power) {
      answer = title[mid][0];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const title = [];

for(let i=1;i<=N;i++) {
  title.push(input[i].split(' '));
}

let result = '';

for(let i=N+1;i<=N + M;i++) {
  result += solution(title, Number(input[i])) + '\n';
}

console.log(result);