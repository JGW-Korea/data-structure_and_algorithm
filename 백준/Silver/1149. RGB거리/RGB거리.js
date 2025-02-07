function solution(n, red, green, blue) {
  const dp = Array.from({length: n + 1}, () => new Array(3).fill(0));

  dp[1][0] = red[1];
  dp[1][1] = green[1];
  dp[1][2] = blue[1];

  for(let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + red[i];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + green[i];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + blue[i];
  }

  return Math.min(...dp[n]);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const red = new Array(n + 1).fill(0);
const green = new Array(n + 1).fill(0);
const blue = new Array(n + 1).fill(0);

for(let i = 1; i <= n; i++) {
  const [r, g, b] = input[i].split(' ').map(Number);
  red[i] = r;
  green[i] = g;
  blue[i] = b;
}

console.log(solution(n, red, green, blue));