function solution(l, p, v) {

  let day = 0;
  
  while(v > p) {

    v -= p
    day += l;
      
  }

  if(v < l) {
      day += v;
    } else {
      day += l;
    }
  
  return day;
  
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let tc=0;tc<input.length-1;tc++) {

  let temp = input[tc].split(' ').map(Number);
  console.log(`Case ${tc+1}: ${solution(temp[0], temp[1], temp[2])}`)
  
}