  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input[0].split('-')
  let answer = '';

  for(let i=0;i<data.length;i++) {
    let cur = data[i].split('+').map(Number).reduce((a, b) => a+b)
    if(i==0) answer += cur;
    else answer -= cur;
  }

  console.log(answer)