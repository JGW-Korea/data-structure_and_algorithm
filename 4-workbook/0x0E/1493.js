const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(length, width, height, N, cubes) {
  const nearsetSqueare = (x) => {
    let i = 1;
    while (2 ** i <= x) i += 1;
    return i - 1;
  };

  let size = 19;
  size = nearsetSqueare(length);
  size = Math.min(size, nearsetSqueare(width));
  size = Math.min(size, nearsetSqueare(height));

  let res = 0;
  let used = 0;
  for (let i = size; i >= 0; i--) {
    used *= 8;

    let current = 2 ** i;
    let required = Math.floor(length / current) * Math.floor(width / current) * Math.floor(height / current) - used;
    let usage = Math.min(required, cubes[i]);

    res += usage;
    used += usage;
  }

  if (used === length * width * height) return res;
  return -1;
}

const [length, width, height] = input.shift().split(" ").map(Number);
const N = Number(input.shift());

const cubes = new Array(20).fill(0); // 큐브의 개수인 N은 최대 20개이기 때문에 배열의 크기를 20으로 잡는다.
for (const cube of input) {
  const [a, b] = cube.split(" ").map(Number);
  cubes[a] = b;
}

console.log(solution(length, width, height, N, cubes));
