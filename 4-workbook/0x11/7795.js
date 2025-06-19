const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, M, A, B) {
  B.sort((a, b) => a - b); // 오름차순 정렬

  function binarySearch(target) {
    let left = 0;
    let right = B.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (B[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }

  // A 집합에서 B 집합에서 먹이를 먹을 수 있는 쌍의 개수를 구한다.
  let count = 0;
  for (const a of A) {
    count += binarySearch(a);
  }

  return count;
}

let T = Number(input[0]);

let answer = "";
let idx = 1;
for (let i = 0; i < T; i++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  const A = input[idx++].split(" ").map(Number);
  const B = input[idx++].split(" ").map(Number);

  answer += solution(N, M, A, B) + "\n";
}

console.log(answer);
