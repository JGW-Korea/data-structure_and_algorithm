function solution(A, B, C) {
  function recursion(power) {
    if (power === 1n) return A % C; // 거듭제곱이 1인 경우에는 A를 C로 나눈 나머지를 반환한다.

    // 거듭제곱을 절반으로 나누어 계산한다.
    const half = recursion(power / 2n) % C;

    if (power % 2n) return (half * half * (A % C)) % C;
    return (half * half) % C;
  }

  return recursion(B).toString();
}

const [A, B, C] = require("fs").readFileSync("index.txt").toString().trim().split(" ").map(BigInt);
console.log(solution(A, B, C));
