function solution(N, M, map) {

  let year = 0; // 빙산이 녹는 년도
  
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while(true) {
    const visited1 = Array.from({length: N}, () => new Array(M).fill(0));
    const visited2 = Array.from({length: N}, () => new Array(M).fill(0));

    let mass = 0;
    let flag = 0;
    
    for(let i = 0; i < N; i++) {
      for(let j = 0; j < M; j++) {
        if(map[i][j] > 0) {
          visited1[i][j] = 1;
          
          for(let k = 0; k < 4; k++) {
            const [nextX, nextY] = [i + dx[k], j + dy[k]];
            if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
            if(map[nextX][nextY] === 0 && map[i][j] > 0 && !visited1[nextX][nextY]) {
              map[i][j] -= 1;
            }
          }
        }
      }
    }

    year += 1;

    for(let i = 0; i < N; i++) {
      for(let j = 0; j < M; j++) {
        if(map[i][j] === 0) flag += 1;
        if(map[i][j] > 0 && visited2[i][j] === 0) {
          mass += 1;
          visited2[i][j] = mass;

          const queue = [];
          queue.push([i, j]);
          
          while(queue.length) {
            const [currentX, currentY] = queue.shift();

            for(let k = 0; k < 4; k++) {
              const [nextX, nextY] = [currentX + dx[k], currentY + dy[k]];
              if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
              if(map[nextX][nextY] > 0 && !visited2[nextX][nextY]) {
                queue.push([nextX, nextY]);
                visited2[nextX][nextY] = mass;
              }
            }
          }
        }
      }
    }

    if(mass >= 2) return year;
    if(flag === N * M) return 0;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = Array.from({length: N}, () => []);

for(let i = 1; i <= N; i++) {
  map[i - 1] = input[i].split(' ').map(Number);
}

console.log(solution(N, M, map));