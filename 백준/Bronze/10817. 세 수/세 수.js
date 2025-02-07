const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

arr.sort((a, b) => a - b);
console.log(arr[1]);