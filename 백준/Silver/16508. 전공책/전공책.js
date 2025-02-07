function solution(T, N, books) {
  const totalCount = new Array(26).fill(0); // T 문자열에서 사용된 알파벳 개수
  let answer = Number.MAX_SAFE_INTEGER; // 최소값을 저장한다.

  // T 문자열에서 사용된 각 알파벳의 개수를 센다.
  for (let i = 0; i < T.length; i++) {
    totalCount[T[i].charCodeAt() - 65] += 1;
  }

  function recursion(index, currentCount, total) {
    // 현재 사용된 알파벳의 개수가 T 문자열을 만들 수 있는지 확인
    let canFormT = true;
    for (let i = 0; i < 26; i++) {
      if (currentCount[i] < totalCount[i]) {
        canFormT = false;
        break;
      }
    }

    if (canFormT) {
      answer = Math.min(answer, total); // 최소값을 갱신한다.
      return;
    }

    if (index >= N) return;

    for (let i = index; i < N; i++) {
      const [price, book] = books[i];
      const newCount = [...currentCount];

      for (let j = 0; j < book.length; j++) {
        newCount[book[j].charCodeAt() - 65] += 1;
      }

      recursion(i + 1, newCount, total + price);
    }
  }

  recursion(0, new Array(26).fill(0), 0);

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];
const N = Number(input[1]);
const books = [];

for (let i = 2; i < N + 2; i++) {
  const [price, book] = input[i].split(" ");
  books.push([Number(price), book.split("").sort().join("")]);
}

console.log(solution(T, N, books));
