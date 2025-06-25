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

function solution(N, M, coordinate, connect) {
  const parent = Array.from({ length: N + 1 }, (_, idx) => idx); // 크로스칼 알고리즘을 위한 서로서 집합의 최상위 정점을 자기 자신으로 초기화

  // 이미 연결된 통로는 같은 집합으로 간주
  for (const [a, b] of connect) {
    union(parent, a, b);
  }

  const costs = []; // 좌표값을 기준으로 거리를 계산한 그래프를 생성
  for (let i = 0; i < N - 1; i++) {
    const [x1, y1] = coordinate[i];

    for (let j = i + 1; j < N; j++) {
      const [x2, y2] = coordinate[j];
      costs.push([i + 1, j + 1, Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))]);
    }
  }

  costs.sort((a, b) => a[2] - b[2]); // 가중치 값을 기준으로 오름차순 정렬

  // 크루스칼 알고리즘 수행
  let answer = 0;
  for (const [a, b, cost] of costs) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer.toFixed(2);
}

const [N, M] = input[0].split(" ").map(Number);
const coordinate = input.slice(1, N + 1).map((el) => el.split(" ").map(Number)); // 황선자를 포함한 우주신들의 좌표
const connect = input.slice(N + 1).map((el) => el.split(" ").map(Number)); // 이미 연결된 통로

console.log(solution(N, M, coordinate, connect));
