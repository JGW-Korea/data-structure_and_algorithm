const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const N = Number(input[0]);
const strSet = input.slice(1);

function solution(n, strSet) {
  let answer = 0; // 연속 단어 개수

  for (const str of strSet) {
    let current = str[0];
    let flag = false;

    const set = new Set(current);

    for (let i = 1; i < str.length; i++) {
      const next = str[i];

      // 현재 단어와 다음 단어가 동일한 경우 넘어감
      if (current === next) continue;
      // 현재 단어와 다음 단어가 동일하지 않은 경우
      else if (current !== next && !set.has(next)) {
        current = next;
        set.add(next);
      }

      // 모든 조건이 맞지 않을 경우
      else {
        flag = true;
        break;
      }
    }

    if (!flag) answer += 1;
  }

  return answer;
}

console.log(solution(N, strSet));
