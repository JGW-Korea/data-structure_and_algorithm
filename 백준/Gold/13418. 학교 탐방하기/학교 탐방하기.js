function find(parent, x) {
  if(parent[x] === x) {
    return x;
  }

  return parent[x] = find(parent, parent[x]);
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if(a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  return a === b;
}

function solution(N, M, graph) {

  function shortPath(flag) {
    if(flag) graph.sort((a, b) => a[2] - b[2]); // 최악의 결과
    else graph.sort((a, b) => b[2] - a[2]); // 최선의 결과
    
    let parent = Array.from({length: N + 1}, (_, idx) => idx);
    let answer = 0;

    for(const [a, b, cost] of graph) {
      if(!compare(parent, a, b)) {
        if(cost === 0) answer += 1;
        union(parent, a, b);
      }
    }
    
    return Math.pow(answer, 2);
  }

  return Math.abs(shortPath(true) - shortPath(false));
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(element => element.split(' ').map(Number));

console.log(solution(N, M, graph));