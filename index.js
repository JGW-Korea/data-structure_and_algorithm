function solution(heights) {
  const total = heights.reduce((prev, curr) => prev + curr, 0);

  let p1 = 0;
  let p2 = heights.length - 1;

  while (p1 < p2) {
    let sum = total - (heights[p1] + heights[p2]);

    if (sum === 100) {
      return 1;
    }

    if (sum > 100) p2 -= 1;
    else {
      p1 += 1;
    }
  }
}

const fs = require("fs");
const heights = fs
  .readFileSync("index.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(heights.sort((a, b) => a - b)));
