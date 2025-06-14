const [A, B] = require("fs").readFileSync("index.txt").toString().trim().split(" ").map(Number);

if (A > B) console.log(">"); // A가 B보다 큰 경우
else if (A < B) console.log("<"); // A가 B보다 작은 경우
else console.log("=="); // A와 B가 동일한 경우
