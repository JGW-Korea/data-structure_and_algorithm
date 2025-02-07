function solution(N, graph) {
  const visited = new Array(N + 1).fill(0);
  let answer = 0;

  function dfs(node) {
    const stack = [...node];

    while (stack.length) {
      const n = stack.pop();
      if (visited[n]) continue;
      visited[n] = 1;
      stack.push(...graph[n]);
    }
  }

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      answer += 1;
      dfs(graph[i]);
    }
  }

  return answer;
}

const fs = require("fs");
const input = 
  fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => item.split(' ').map(Number));

const [N, M] = input.shift()
const graph = Array.from({ length: N + 1 }, () => []);

input.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
})

console.log(solution(N, graph));