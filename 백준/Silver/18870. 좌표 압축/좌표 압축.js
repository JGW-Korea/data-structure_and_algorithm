let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let uniqueArray = [... new Set(arr)];
uniqueArray.sort((a, b) => a - b)

let myMap = new Map();
for(let i=0;i<uniqueArray.length;i++){

  myMap.set(uniqueArray[i], i);
  
}

let answer = '';

for(let i of arr) {
  answer += myMap.get(i) + " ";
}

console.log(answer)