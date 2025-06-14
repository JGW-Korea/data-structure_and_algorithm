const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, options) {
  let answer = "";
  const shortKey = new Set();

  create: for (const option of options) {
    const words = option.split(" ");

    // 각 단어의 첫 글자 단축키로 지정
    for (let i = 0; i < words.length; i++) {
      if (shortKey.has(words[i][0].toLowerCase())) continue;
      else {
        answer +=
          `${words.slice(0, i).join(" ")} [${words[i][0]}]${words[i].slice(1)} ${words.slice(i + 1).join(" ")}`.trim() +
          "\n";
        shortKey.add(words[i][0].toLowerCase());
        continue create;
      }
    }

    // 모든 단어의 첫 글자가 이미 단축키로 지정된 경우
    for (let i = 0; i < words.length; i++) {
      for (let j = 1; j < words[i].length; j++) {
        if (shortKey.has(words[i][j].toLowerCase())) continue;
        else {
          answer +=
            `${words.slice(0, i).join(" ")} ${words[i].slice(0, j)}[${words[i][j]}]${words[i].slice(j + 1)} ${words
              .slice(i + 1)
              .join(" ")}`.trim() + "\n";
          shortKey.add(words[i][j].toLowerCase());
          continue create;
        }
      }
    }

    answer += option + "\n"; // 모든 조건이
  }

  return answer;
}

const N = Number(input[0]);
const options = input.slice(1);

console.log(solution(N, options));
