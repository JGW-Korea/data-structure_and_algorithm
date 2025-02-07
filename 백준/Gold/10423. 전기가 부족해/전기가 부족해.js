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

function solution(N, M, K, YNA, graph) {
  graph.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({length: N + 1}, (_, idx) => idx);

  // YNA 발전소가 설치된 정점의 최상위 원소를 -1로 모두 같게 설정한다.
  for(const station of YNA) {
    parent[station] = -1;
  }

  let answer = 0;
  
  for(const [a, b, cost] of graph) {
    if(!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const YNA = input[1].split(' ').map(Number);
const graph = input.slice(2).map(element => element.split(' ').map(Number));

console.log(solution(N, M, K, YNA, graph));