const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

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

function solution(N, W, P) {
  const costs = [];

  for (let i = 1; i < N + 1; i++) {
    costs.push([0, i, W[i]]); // 새로운 정점을 추가한다. (각 논에 직접 우물을 파는 비용)

    for (let j = 1; j < N + 1; j++) {
      if (i !== j) costs.push([i, j, P[i][j]]); // 논들 사이에 물을 끌어오는 비용
    }
  }

  // 크루스칼 알고리즘을 하기 위해 가중치를 기준으로 오름차순 정렬
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: N + 1 }, (_, idx) => idx); // 집합을 위한 부모 정점

  // 크루스칼 알고리즘 수행
  let answer = 0;
  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      // 1 -> 2 (2)
      // 1 -> 3 (2)
      // 1 -> 4 (2)
      // 0 -> 4 || 2 -> 4 (3):
      // 논 1 → 2, 1 → 3, 1 → 4 수로는 연결돼 있지만,
      // 물이 실제로 공급되기 위해서는 적어도 한 곳에 우물이 존재해야 한다.
      // 따라서 4번 논에 직접 우물을 파는 것이 선택되었고,
      // 이를 통해 모든 논에 물이 공급될 수 있게 된다.
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}

const N = Number(input[0]); // 논의 개수

// 각 논에 직접 우물을 파는 비용
const W = input.slice(1, N + 1).map(Number);
W.unshift(0);

// 논들 사이에 물을 끌어오는 비용
const P = input.slice(N + 1).map((element) => [0, ...element.split(" ").map(Number)]);
P.unshift(new Array(N + 1).fill(0));

console.log(solution(N, W, P));
