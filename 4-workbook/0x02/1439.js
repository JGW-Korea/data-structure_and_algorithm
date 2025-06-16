function solution(S) {
  const swap = (reverseNumber) => {
    let count = 0;

    // S 길이의 문자열을 뒤집을 번호에 맞게 뒤집은 횟수 구하기
    for (let i = 0; i < S.length; i++) {
      if (S[i] === reverseNumber) {
        if (S[i + 1] !== reverseNumber) count += 1;
      }
    }

    return count;
  };

  const zeroCount = swap(0); // 0먼저 뒤집은 횟수
  const oneCount = swap(1); // 1먼저 뒤집은 횟수

  return Math.min(zeroCount, oneCount);
}

const S = require("fs").readFileSync("index.txt").toString().trim().split("").map(Number);
console.log(solution(S));
