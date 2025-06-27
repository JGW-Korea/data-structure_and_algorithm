const [N, ...numbers] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);

function solution(N, numbers) {
  let answer = "";
  let stack = []; // 스택 자료구조 생성

  // idx가 N의 이하일때까지 반복
  let number = 1;
  let idx = 0;
  while (idx < N) {
    if (!stack.length || stack.at(-1) < numbers[idx]) {
      stack.push(number++);
      answer += "+\n";
    } else {
      stack.pop();
      answer += "-\n";
      idx += 1;
    }
  }

  return stack.length ? "NO" : answer;
}

console.log(solution(N, numbers));
