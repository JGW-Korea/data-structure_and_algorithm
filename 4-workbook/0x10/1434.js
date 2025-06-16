const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, boxs, books) {
  let bookIdx = 0; // 현재 들고있는 책의 순서

  // 주어진 N개의 박스들에 순차적으로 책을 넣는다.
  for (let i = 0; i < N; i++) {
    while (bookIdx !== M) {
      // 현재 책의 크기가 박스에 들어갈 수 있는 용량보다 클 경우
      if (books[bookIdx] > boxs[i]) break;
      // 현재 박스에 책을 넣음
      else {
        boxs[i] -= books[bookIdx++];
      }
    }
  }

  // 남은 공간 계산
  return boxs.reduce((sum, size) => (sum += size), 0);
}

const [N, M] = input[0].split(" ").map(Number); // N -> 빈 박스 개수, M -> 책의 개수
const boxs = input[1].split(" ").map(Number); // N개로 이루어진 각 박스의 크기
const books = input[2].split(" ").map(Number); // M개로 이루어진 각 책의 크기

console.log(solution(N, M, boxs, books));
