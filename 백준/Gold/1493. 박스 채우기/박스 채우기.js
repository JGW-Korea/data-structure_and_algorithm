function nearsetSqueare(x) {
  
  let i = 1;
  while((2 ** i) <= x) i += 1;
  return i - 1;
  
}

  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n')

  let [length, width, height] = input[0].split(' ').map(Number);
  let cubes = new Array(20).fill(0);

  let n = Number(input[1]);

  for(let i=2;i<=n+1;i++) {

    let [a, b] = input[i].split(' ').map(Number);
    cubes[a] = b;
    
  }

  let size = 19;
  size = nearsetSqueare(length);
  size = Math.min(size, nearsetSqueare(width));
  size = Math.min(size, nearsetSqueare(height));

  let res = 0;
  let used = 0;

  for(let i = size;i>=0;i--) {

    used *= 8;
    cur = (2 ** i);

    let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;

    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
    
  }

  if(used == length * width * height) console.log(res);
  else console.log(-1)