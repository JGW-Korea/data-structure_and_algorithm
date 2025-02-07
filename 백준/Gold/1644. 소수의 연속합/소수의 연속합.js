function getPrime(n) { // 에라토스테네스의 체를 이용한 소수 구하는 로직
  const prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false;

  for(let i = 2; i * i <= n; i++) {
    if(prime[i]) {
      for(let j = i * i; j <= n ; j += i) {
        prime[j] = false;
      }
    }
  }

  const result = [];
  prime.forEach((element, idx) => {
    if(element) result.push(idx)
  });

  return result;
}

function solution(n) {
  const prime = getPrime(n);

  let partialSum = 0; // 소수의 연속합
  let [p1, p2] = [0, 0]; // 투 포인터
  let count = 0; // 연속된 소수의 합 개수

  // 투 포인터 알고리즘
  while(p1 <= p2) {
    if(partialSum === n) {
      count += 1;
      partialSum += prime[p2];
      p2 += 1;
    }

    if(partialSum < n) {
      partialSum += prime[p2];
      p2 += 1;
    } else {
      partialSum -= prime[p1];
      p1 += 1;
    }
  }

  return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));