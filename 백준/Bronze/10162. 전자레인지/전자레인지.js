function solution(time) {

  let timeBtn = [300, 60, 10];
  let count = new Array(timeBtn.length).fill(0);

  for(let i=0;i<timeBtn.length;i++) {

    count[i] = parseInt(time / timeBtn[i]);
    time = parseInt(time % timeBtn[i])
    
  }

  if(time > 0) {
    return -1;
  } else {
    return count.join(' ');
  }
  
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(solution(Number(input[0])))