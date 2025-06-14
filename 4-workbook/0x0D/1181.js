const fs = require("fs");
const [_, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(
  [...new Set(words)]
    .sort((a, b) => {
      if (a.length === b.length) return a > b ? 1 : -1;
      return a.length - b.length;
    })
    .join("\n")
);
