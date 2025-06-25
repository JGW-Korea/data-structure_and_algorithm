const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(L, C, chars) {
  const comb = new Array(L).fill(""); // 문자열 조합을 담는 1차원 배열
  const isUsed = new Array(C).fill(false); // 해당 문자가 사용되고 있는지 여부 확인

  let answer = "";
  function combination(currentLength, currentIdx) {
    // 문자열 조합이 완성된 경우
    if (currentLength === L) {
      let a = 0; // 모음 개수
      let b = 0; // 자음 개수

      // 현재 암호 조합의 모음과 자음의 개수를 카운트
      for (const char of comb) {
        if (["a", "e", "i", "o", "u"].includes(char)) a += 1;
        else {
          b += 1;
        }
      }

      // 최소 한개의 모음과 최소 두 개의 자음으로 구성되어 있는 암호일 경우
      if (a >= 1 && b >= 2) {
        answer += comb.join("") + "\n";
      }

      return;
    }

    for (let i = currentIdx; i < C; i++) {
      if (!isUsed[i]) {
        comb[currentLength] = chars[i];
        isUsed[i] = true;
        combination(currentLength + 1, i + 1);
        isUsed[i] = false;
      }
    }
  }

  combination(0, 0);
  return answer;
}

const [L, C] = input[0].split(" ").map(Number);
const chars = input[1].split(" ").sort();

console.log(solution(L, C, chars));
