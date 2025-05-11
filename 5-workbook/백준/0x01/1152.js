const fs = require("fs");
const string = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(string[0] === "" ? 0 : string.length);
