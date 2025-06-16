const N = Number(require("fs").readFileSync("index.txt").toString().trim());
console.log(
  N.toString()
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
