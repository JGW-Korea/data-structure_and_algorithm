function solution(datas) {
  // 주어진 좌표를 y 순으로 정렬한다. (좌표 y가 같으면, x 순으로 정렬)
  datas.sort((a, b) => {
    if(a[1] !== b[1]) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });

  let answer = '';

  for(const data of datas) {
    answer += data[0] + ' ' + data[1] + '\n';
  }

  return answer;
}


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const datas = new Array(N);

for(let i = 1; i <= N; i++) {
  datas[i - 1] = input[i].split(' ').map(Number);
}

console.log(solution(datas));