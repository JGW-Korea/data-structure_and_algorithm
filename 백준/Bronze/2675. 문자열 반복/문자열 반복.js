let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let testCase = Number(input[0]);

  
  for(let i=1;i<=testCase;i++){

    let [loop, str] = input[i].split(' ');
    let result = '';  

    for(let j=0;j<str.length;j++){
      for(let k=0;k<loop;k++){
        result += str[j];
      }
    }

    console.log(result)
    
  }