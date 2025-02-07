function solution(n, flowers) {
  flowers.sort((a, b) => a[0] - b[0]); // 꽃이 피는 시간 기준으로 오름차순 정렬을 한다.

  let count = 0; // 꽃을 심을 수 있는 개수
  let end = 301; // 현재 꽃이 지는 기간
  let idx = 0; // 꽃의 정보의 위치를 나타내는 index

  while(end <= 1130 && idx < n) {
    let maxEnd = -1; // 심을 수 있는 꽃들 중에서 가장 늦게 지는 날짜를 가리킨다.
    let selected = false; // 꽃을 선택할 수 있는지를 나타낸다.

    while(idx < n && flowers[idx][0] <= end) {
      selected = true;
      maxEnd = Math.max(maxEnd, flowers[idx++][1]);
    }

    // 선택이 되지 않았다는 의미는 3.1일 ~ 11.30일까지 심을 수 있는 꽃이 없다는 이야기
    if(!selected) return 0;
    else {
      end = maxEnd; // 꽃이 지는 날짜를 심을 수 있는 꽃들 중에서 가장 늦게 지는 날짜로 갱신한다.
      count += 1; // 심을 수 있는 꽃의 개수를 1 증가시킨다.
    }
  }

  return end > 1130 ? count : 0; // 주어진 입력을 기준으로 꽃을 3.1일 ~ 11.30일까지 심을 수 있으면, 꽃의 개수를 반환
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const flowers = [];

for(let i = 1; i <= n; i++) {
  // 꽃의 정보를 MMDD로 포맷팅하기 위해 공백을 기준으로 시간을 가져온다.
  const [a, b, c, d] = input[i].split(' ').map(Number); 
  flowers.push([a * 100 + b, c * 100 + d]); // 꽃이 피는 시간, 지는 시간의 월에 100을 곱하면, MMDD로 포맷팅 가능
}

console.log(solution(n, flowers));