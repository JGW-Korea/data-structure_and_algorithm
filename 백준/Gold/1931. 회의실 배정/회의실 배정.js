let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let list = [];

for(let i=1;i<=n;i++) {

  list.push(input[i].split(' ').map(Number));
  
}

list.sort(function(a, b){
    if(a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0]
});

let count = 1;
let cur = 0;

for(let i=1;i<n;i++) {

  if(list[cur][1] <= list[i][0]) {

    cur = i;
    count += 1;
    
  }
  
}

console.log(count)