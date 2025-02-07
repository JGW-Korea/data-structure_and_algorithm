const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const x = Number(input);
let answer = 0;

for(let i = 1; i <= x; i++) {
  if(i < 100) answer += 1; // 100이전까지는 모두 등차수열이기 때문에 1씩 증가한다.
  else {
    const strNum = i.toString();

    // 주어진 N이 1000보다 작거나 같다. 하지만, 1000은 등차수열이 아니기 때문에 백의자리를 등차수열을 구한다.
    const x = Number(strNum[0]) - Number(strNum[1]); 
    const y = Number(strNum[1]) - Number(strNum[2]);

    // x와 y가 같으면 1을 증가한다.
    if(x === y) answer += 1;
  }
}

console.log(answer);