const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(_, serial) {
  return serial
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length; // 기준 1. A의 B의 길이가 다르면, 짧은 것이 먼저 온다.
      else {
        // 서로 길이가 같을 경우 각 자리수 합을 구하는 함수
        const sum = (str) => {
          return str.split("").reduce((sum, char) => {
            return Number.isNaN(Number(char)) ? sum : sum + Number(char);
          }, 0);
        };

        // a, b 시리얼 번호의 숫자 합계를 구한다.
        const sumA = sum(a);
        const sumB = sum(b);

        if (sumA !== sumB) return sumA - sumB; // 기준 2. 서로 길이가 같으면서, 합계가 다른 경우 -> 작은 값부터 정렬
        else return a > b ? 1 : -1; // 기준 3. 위 두 조건이 모두 아닌 경우 사전순으로 정렬
      }
    })
    .join("\n");
}

const N = Number(input[0]);
const serial = input.slice(1);

console.log(solution(N, serial));
