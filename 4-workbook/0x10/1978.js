const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function getPrimes(number) {
  const primeNumbers = new Array(number + 1).fill(true);
  primeNumbers[0] = primeNumbers[1] = false;

  // 소수인 값의 배수를 모두 false로 확립 -> 제곱 소수 판별
  for (let i = 2; i * i < number + 1; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j < number + 1; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  // 전체 소수 값 반환
  return primeNumbers.map((number, idx) => number && idx).filter(Boolean);
}

function solution(N, numbers) {
  const primeNumbers = getPrimes(Math.max(...numbers));
  let answer = 0; // 소수의 개수

  console.time("linear");
  // 1) 선형 탐색 -> N은 최대 1000이기 때문에 O(1000) -> 2초 이내에 실행 가능
  for (const number of numbers) {
    if (number === 1) continue;

    let flag = false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = true;
        break;
      }
    }

    if (!flag) answer += 1;
  }
  console.timeEnd("linear"); // 0.04ms ~ 0.045ms

  console.time("Sieve of Eratosthenes");
  // 2) 에라토스테네스의 체 -> O(n log log n) + O(N) => O((NloglogN) + N)
  numbers.forEach((number) => {
    if (primeNumbers.includes(number)) {
      answer += 1;
    }
  });
  console.timeEnd("Sieve of Eratosthenes"); // 0.01ms ~ 0.014ms

  return answer;
}

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
console.log(solution(N, numbers));
