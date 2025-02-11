function solution(heights) {
  const totalHeights = heights.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (totalHeights - (heights[i] + heights[j]) === 100) {
        return heights
          .filter((height) => height !== heights[i] && height !== heights[j])
          .sort((a, b) => a - b)
          .join("\n");
      }
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

console.log(solution(heights));
