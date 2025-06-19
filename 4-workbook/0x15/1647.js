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

function solution(N, M, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: N + 1 }, (_, idx) => idx); // 최상위 집합을 초기에는 자기 자신으로 지정한다.

  // 크루스칼 알고리즘 수행
  const answer = [];
  for (const [a, b, cost] of costs) {
    if (!compare(parent, a, b)) {
      answer.push(cost);
      union(parent, a, b);
    }
  }

  return answer.slice(0, answer.length - 1).reduce((sum, curr) => (sum += curr), 0);
}

const [N, M] = input[0].split(" ").map(Number);
const costs = input.slice(1).map((el) => el.split(" ").map(Number));

console.log(solution(N, M, costs));
