function solution(L, C, letters) {
  const isUsed = new Array(C).fill(0); // 현재 문자 사용 유무 표시
  const comb = new Array(L).fill(""); // 암호 조합

  let answer = "";

  function dfs(currentIdx, currentLength) {
    if (currentLength === L) {
      let vowelCount = 0; // 모음 개수
      let consonantCount = 0; // 자음 개수

      // 현재 암호 조합의 모음과 자음의 개수를 카운트 한다.
      for (const letter of comb) {
        if (["a", "e", "i", "o", "u"].includes(letter)) vowelCount += 1;
        else {
          consonantCount += 1;
        }
      }

      // 모음 한 개 이상 + 두 개의 자음 이상으로 구성된 암호일 경우
      if (vowelCount >= 1 && consonantCount >= 2) {
        answer += comb.join("") + "\n";
      }

      return;
    }

    for (let i = currentIdx; i < C; i++) {
      // 현재 문자가 사용되지 않은 경우
      if (!isUsed[i]) {
        comb[currentLength] = letters[i];
        isUsed[i] = 1;
        dfs(i + 1, currentLength + 1);
        isUsed[i] = 0;
      }
    }
  }

  dfs(0, 0);
  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// L : 암호의 길이
// C : 민식, 영식 형제가 추측한 가능성 있는 문자 종류의 수
const [L, C] = input[0].split(" ").map(Number);
const letters = input[1].split(" ").sort((a, b) => (a > b ? 1 : -1));

console.log(solution(L, C, letters));
