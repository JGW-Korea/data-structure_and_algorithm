function solution(n, m, numbers1, numbers2) {
  numbers1.sort((a, b) => a - b);
  
  let result = '';

  for(let i = 0; i < m; i++) {
    let flag = false;
    let left = 0;
    let rigth = n - 1;

    while(left <= rigth) {
      let mid = Math.floor((left + rigth) / 2);
      
      if(numbers1[mid] === numbers2[i]) {
        flag = true;
        break;
      }

      if(numbers1[mid] > numbers2[i]) {
        rigth = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if(flag) result += '1' + '\n';
    else result += '0' + '\n';
  }

  return result;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const numbers1 = input[1].split(' ').map(Number);
const m = Number(input[2]);
const numbers2 = input[3].split(' ').map(Number);

console.log(solution(n, m, numbers1, numbers2));