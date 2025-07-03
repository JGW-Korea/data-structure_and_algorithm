const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if (a < b) parent[b] = a;
  else {
    parent[a] = b;
  }
}

function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  return a === b;
}

function solution(N, M, graph) {
  graph.sort((a, b) => a[2] - b[2]); // 크루스칼 알고리즘을 위한 간선 기준으로 오름차순 정렬

  const parent = Array.from({ length: N + 1 }, (_, idx) => idx); // 자기 자신을 최상위 정점으로 지정

  // 크루스칼 알고리즘 수행
  let answer = 0;
  for (const [a, b, cost] of graph) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}

const [N, M] = [Number(input[0]), Number(input[1])];
const graph = input.slice(2).map((el) => el.split(" ").map(Number));
console.log(solution(N, M, graph));
