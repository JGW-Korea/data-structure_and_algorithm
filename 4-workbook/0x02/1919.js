function solution(A, B) {
  const alpha = new Array(26).fill(0); // 두 단어에 나온 알파벳 개수를 카운팅하기 위한 1차원 배열

  // A 문자열에서 나온 알파벳을 체크한다. +1
  A.split("").forEach((el) => {
    alpha[el.charCodeAt() - 97] += 1;
  });

  // B 문자열에서 나온 알파벳을 체크한다. -1
  B.split("").forEach((el) => {
    alpha[el.charCodeAt() - 97] -= 1;
  });

  return alpha.filter(Boolean).reduce((sum, curr) => (sum += Math.abs(curr)), 0);
}

const [A, B] = require("fs").readFileSync("index.txt").toString().trim().split("\n");
console.log(solution(A, B));
