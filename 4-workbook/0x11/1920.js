const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, numberN, M, numberM) {
  // 이진 탐색을 위한 N개의 정수를 오름차순으로 정렬시킨다.
  numberN.sort((a, b) => a - b);

  // M개의 정수가 N 수열에 포함되어있는지 확인한다.
  const answer = new Array(M).fill(0);
  for (let i = 0; i < M; i++) {
    const number = numberM[i]; // for...of 문을 하면 배열의 원소를 순회할 수 있지만, answer을 M의 크기로 지정한 만큼 인덱스가 필요하다.

    let left = 0;
    let right = N - 1;

    // 이진 탐색 수행
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (numberN[mid] === number) {
        answer[i] = 1;
        break;
      }

      if (number < numberN[mid]) right = mid - 1;
      else {
        left = mid + 1;
      }
    }
  }

  return answer.join("\n");
}

const [N, numberN] = [Number(input[0]), input[1].split(" ").map(Number)];
const [M, numberM] = [Number(input[2]), input[3].split(" ").map(Number)];
console.log(solution(N, numberN, M, numberM));
