function solution(heights) {
  // 9명의 난쟁이의 총합을 구하세요
  // (0) [20, 7, 23, 19, ...]
  const total = heights.reduce((sum, current) => (sum += current), 0);

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (i === j) continue; // 두명을 선택해야 되는데 동일한 두 사람을 선택했기 때문

      // (heights[i] + heights[j]) === 100
      // 두 명을 찾았다는 이야기가 되겠지요?
      if (total - (heights[i] + heights[j]) === 100) {
        // console.log(`heights[i]: ${heights[i]}, 위치: ${i}`);
        // console.log(`heights[j]: ${heights[j]}, 위치: ${j}`);

        // 일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.
        // 7
        // 8
        // 10
        // 13
        // 19
        // 20
        // 23

        return heights
          .filter((_, idx) => idx !== i && idx !== j)
          .sort((a, b) => a - b)
          .join("\n");
      }
    }
  }

  // - 9명의 난쟁이가 주어짐
  // - 원래는 키 총합이 100인 7명밖에 없음
  // - 결국 가능한 모든 경우를 확인하면서 키의 총합이 100인 난쟁이들만 추출
}

// File을 읽어와야 돼 -> index.txt -> FS(File System)
// JS 모듈 시스템 -> CommonJS, AMD, UMD, ESModules
// CommonJS -> Node.js 자체 모듈 시스템에 속함 (requeire)
// AMD -> 브라우저 환경에서 비동기 지원 모듈 시스템 (공식 표준 X)
// UMD -> Node.js 브라우저 환경 모두 가능하지만 공식 표준 X, 라이브러리에 속함
// ESModules -> ES6(ES2015)에 표준으로 정의된 공식 모듈 시스템
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input));
