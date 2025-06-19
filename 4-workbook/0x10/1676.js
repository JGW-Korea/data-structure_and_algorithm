const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log(Math.floor(N / 5) + Math.floor(N / 25) + Math.floor(N / 125));
