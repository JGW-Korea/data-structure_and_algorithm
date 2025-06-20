const input = require("fs").readFileSync("index.txt").toString().trim();

// 2진수 자릿수를 3의 배수로 만들기 위해 앞에 0을 채움
const padded = input.padStart(Math.ceil(input.length / 3) * 3, "0");

let result = "";
for (let i = 0; i < padded.length; i += 3) {
  const chunk = padded.slice(i, i + 3);
  result += parseInt(chunk, 2).toString();
}

console.log(result);
