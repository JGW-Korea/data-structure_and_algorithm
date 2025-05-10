function solution(str) {
  const alpha = new Array(26).fill(0); // 알파벳의 개수만큼의 크기를 생성한다.

  // 알파벳 개수를 증가시킨다.
  for (let i = 0; i < str.length; i++) {
    alpha[str[i].charCodeAt() - 97] += 1;
  }

  // 가장 많이 사용된 알파벳 개수
  const max = Math.max(...alpha);
  const result = [];
  for (let i = 0; i < alpha.length; i++) {
    if (max === alpha[i]) {
      result.push(String.fromCharCode(97 + i).toUpperCase());
    }
  }

  return result.length > 1 ? "?" : result[0];
}

const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase();

console.log(solution(str));
