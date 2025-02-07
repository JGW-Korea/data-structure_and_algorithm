function solution(number) {
  // 플라스틱 숫자 세트 0 ~ 9
  const numberSet = new Array(10).fill(0);

  for(const num of number) {
    // 6은 9로 뒤집을 수 있다.
    if(num === '6' && numberSet[9] < numberSet[num]) numberSet[9] += 1;
    // 9는 6으로 뒤집을 수 있다.
    else if(num === '9' && numberSet[6] < numberSet[num]) numberSet[6] += 1;
    else {
      numberSet[num] += 1;
    }
  }

  // 플라스틱 세트 개수 중 최대값이 정답이 된다.
  return Math.max(...numberSet);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(input));