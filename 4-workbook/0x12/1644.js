function getPrime(num) {
  const prime = new Array(num + 1).fill(true); // 모든 양의 정수를 소수라고 치부
  prime[0] = prime[1] = false;

  // 소수인 값의 배수를 모두 false로 확립
  for (let i = 2; i * i < num + 1; i++) {
    if (prime[i]) {
      for (let j = i * i; j < num + 1; j += i) {
        prime[j] = false;
      }
    }
  }

  // 소수인 값만 필터해서 반환
  return prime.map((el, idx) => el && idx).filter(Boolean);
}

function solution(N) {
  const primeNumbers = getPrime(N); // 아리스토테네스의 체를 이용해서 먼저 N 이하의 모든 소수값을 구한다.

  // N를 연속된 소수의 합으로 나타낼 수 있는 경우의 수
  let answer = 0;
  for (let i = 0; i < primeNumbers.length; i++) {
    if (primeNumbers[i] === N) {
      answer += 1;
      continue;
    }

    let sum = primeNumbers[i]; // 연속된 소수의 합
    for (let j = i + 1; j < primeNumbers.length; j++) {
      sum += primeNumbers[j];

      // 연속된 소수의 합이 N보다 크거나 같을 경우 더 이상 합을 구할 필요가 없음
      if (sum >= N) {
        if (sum === N) answer += 1;
        break;
      }
    }
  }

  return answer;
}

const N = Number(require("fs").readFileSync("index.txt").toString().trim());
console.log(solution(N));
