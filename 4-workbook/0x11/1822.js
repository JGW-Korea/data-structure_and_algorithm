const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(A, B, setA, setB) {
  const answer = [];

  // value가 setB에 속하는지 확인
  function binarySearch(value) {
    let left = 0;
    let right = setB.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (setB[mid] === value) return false;

      if (setB[mid] < value) left = mid + 1;
      else {
        right = mid - 1;
      }
    }

    return true;
  }

  // setA를 순회하면서 setB에 속하지 않은 값들만 binarySearch를 통해서 확인
  // setA 순회 -> O(N), binarySearch -> O(log N) -> total = O(N + log N);
  setA.forEach((value) => {
    if (binarySearch(value)) {
      answer.push(value);
    }
  });

  return answer.length + "\n" + answer.join(" ");
}

const [A, B] = input[0].split(" ").map(Number);
const setA = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const setB = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(solution(A, B, setA, setB));
