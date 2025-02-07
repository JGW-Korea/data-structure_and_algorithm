let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let num = Number(input[0]);
  let score = input[1].split(' ').map(Number);
  
  let maxValue = Math.max(...score);

  let sum = 0;

  for(let i=0;i<score.length;i++){
    sum += score[i] / maxValue * 100;
  }

  console.log(sum / num)