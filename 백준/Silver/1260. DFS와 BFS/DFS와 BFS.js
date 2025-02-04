function solution(node, edge, start, graph) {
  const dfsVisited = new Array(node + 1).fill(0);
  
  let dfsSearchNode = "";
  let bfsSearchNode = start + " ";

  function dfs(node) {
    if(!dfsVisited[node]) {
      dfsSearchNode += node + " ";
      dfsVisited[node] = 1;

      for(const nextNode of graph[node]) {
        if(!dfsVisited[nextNode]) dfs(nextNode);
      }
      
    }
  }
  
  function bfs() {
    const visited = new Array(node + 1).fill(0);
    const queue = [start];

    visited[start] = 1;
    
    while(queue.length) {
      const current = queue.shift();
      
      for(const nextNode of graph[current]) {
        if(!visited[nextNode]) {
          queue.push(nextNode);
          visited[nextNode] = 1;
          bfsSearchNode += nextNode + " "
        }
      }
    }
    
  }

  dfs(start);
  bfs();

  return dfsSearchNode + "\n" + bfsSearchNode;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [Node, Edge, StartNode] = input[0].split(' ').map(Number);
const graph = Array.from({length: Node + 1}, () => []);

for(let i = 1; i < Edge + 1; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach(element => element.sort((a, b) => a - b));

console.log(solution(Node, Edge, StartNode, graph));