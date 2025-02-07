function solution(users) {
  // 나이순으로만 정렬 (이유: 나이가 같으면, 사전 순이 아닌, 가입한 순서이기 때문)
  users.sort((a, b) => {
    if(Number(a[0]) !== Number(b[0])) return Number(a[0]) - Number(b[0]);
  });

  let result = '';

  users.forEach((element) => {
    result += element[0] + ' ' + element[1] + '\n';
  });

  return result.trim();
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const users = new Array(N);

for(let i = 1; i <= N; i++) {
  users[i - 1] = input[i].split(' ');
}

console.log(solution(users));