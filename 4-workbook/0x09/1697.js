function solution(N, K) {
  const visited = Array.from({ length: 100001 }, () => 0); // 방문 처리를 위한 1차원 배열을 생성한다.
  visited[N] = 1;

  const queue = [N]; // BFS 탐색을 위한 1차원 배열

  // BFS 탐색 수행
  while (queue.length) {
    const currentX = queue.shift();

    for (const nextX of [currentX - 1, currentX + 1, 2 * currentX]) {
      if (nextX < 0 || nextX >= 100001) continue; // 1차원 배열의 크기를 벗어났을 경우

      // 방문을 하지 않았을 경우
      if (!visited[nextX]) {
        queue.push(nextX);
        visited[nextX] = visited[currentX] + 1;
      }
    }
  }

  return visited[K] - 1;
}

const [N, K] = require("fs").readFileSync("index.txt").toString().trim().split(" ").map(Number);
console.log(solution(N, K));
