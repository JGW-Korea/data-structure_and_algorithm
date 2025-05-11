function solution(n, m, deleteNumbers) {
  let queue = Array.from({ length: n }, (_, idx) => idx + 1); // N개의 원소를 포함하고 있는 양방향 순환 큐
  let answer = 0;

  // 삭제할 수 (지민이가 뽑아내려고 하는 원소의 수)
  for (let i = 0; i < m; i++) {
    while (queue[0] !== deleteNumbers[i]) {
      if (queue.indexOf(deleteNumbers[i]) <= Math.floor(queue.length / 2))
        queue.push(queue.shift()); // 2번 연산 수행 -> 가장 왼쪽 원소를 가장 오른쪽으로 이동
      else {
        queue.unshift(queue.pop()); // 3번 연산 수행 -> 가장 오른쪽 원소를 가장 왼쪽으로 이동
      }

      answer += 1;
    }

    queue.shift(); // 1번 연산 수행 -> 첫 번째 원소를 뽑아낸다.
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const deleteNumbers = input[1].split(" ").map(Number);

console.log(solution(N, M, deleteNumbers));
