let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = [];

for(let i=97;i<=122;i++){
  result.push(input[0].indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));