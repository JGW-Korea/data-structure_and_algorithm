function solution(N, roster) {
  // 알파벳 개수만큼 배열 생성
  const count = new Array(26).fill(0);

  // 성을 아스키 코드로 변환 시킨 후 해당 위치에 1 증가
  for(let i = 0; i < N; i++) {
    count[roster[i].charCodeAt() - 97] += 1;
  }

  const result = [];

  // 성의 첫 글자가 같은 선수 5명 이상이면 추가
  for(let i = 0; i < count.length; i++) {
    if(count[i] >= 5) {
      result.push(String.fromCharCode(i + 97));
    }
  }

  // 결과 반환
  return result.length 
    ? result.sort((a, b) => a > b ? 1 : -1).join('') 
    : 'PREDAJA';
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

const roster = [];

for(const element of input) {
  roster.push(element);
}

console.log(solution(N, roster));