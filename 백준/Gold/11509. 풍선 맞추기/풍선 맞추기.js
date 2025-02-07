  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let n = Number(input[0]);
  let data = input[1].split(' ').map(Number);

  let arrow = new Array(100001).fill(0);

  let result = 0;

  for(let x of data) {

    // 화살이 있을경우
    if(arrow[x] > 0) {

      arrow[x] -= 1;
      arrow[x-1] += 1;
      
    }

    // 화살이 없을경우
    else {

      arrow[x-1] += 1;
      result += 1;
      
    }
    
  }

  console.log(result)
