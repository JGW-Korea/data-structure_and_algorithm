function solution(N, M, R, arr) {
  let answer = "";

  function rotate() {
    let min = Math.floor(Math.min(N, M) / 2); // 2차원 배열의 N x M의 값 중에서 최소값을 찾는다.
    let temp = Array.from({length: N}, () => new Array(M).fill(0)); // 임시 배열

    // 그룹의 개수만큼 반복시킨다. (값이 커질수록 안의 그룹들의 값들을 반회전 시킨다.)
    for(let limit = 0; limit < min; limit++) {

      for(let j = (M - 2) - limit; j >= 0 + limit; j--) { // 윗 줄 반시계방향 회전 

        // -> 제일 오른쪽 이전에 있는 위치를 알아야 하기 때문에 (M - 2) - limit를 진행하고, 0까지 감소할 때까지 반복시킨다.
        // -> 이와 같이 하는 이유는 이 연산을 통해서 원본 배열의 제일 오른쪽 있는 값을 j + 1로 알 수 있고, j만 통해서 어느 위치에 저장할 수 있는지 알 수 있기 때문입니다.
        // 4(원본 배열의 제일 오른쪽에 있는 값) -> 3(임시 배열에 저장할 위치)
        // 3(원본 배열의 제일 오른쪽에 있는 값) -> 2(임시 배열에 저장할 위치)
        // 2(원본 배열의 제일 오른쪽에 있는 값) -> 1(임시 배열에 저장할 위치)
        // 1(원본 배열의 제일 오른쪽에 있는 값) -> 0(임시 배열에 저장할 위치)
        
        temp[0 + limit][j] = arr[0 + limit][j + 1];
      }

      // 1(원본 배열의 )
      
      for(let j = 1 + limit; j < N - limit; j++) { // 왼쪽 줄 반시계방향 회전
        temp[j][0 + limit] = arr[j - 1][0 + limit];
      }

      for(let j = 1 + limit; j < M - limit; j++) { // 아랫 줄 반시계방향 회전
        temp[(N - 1) - limit][j] = arr[(N - 1) - limit][j - 1];
      }

      for(let j = (N - 2) - limit; j >= 0 + limit; j--) { // 오른쪽 줄 반시계방향 회전
        temp[j][(M - 1) - limit] = arr[j + 1][(M - 1) - limit];
      }
    }
    
    return temp;
  }
  
  for(let rot = 0; rot < R; rot++) { // 총 R번 만큼 회전시킨다.
    arr = rotate(); // 회전시킨 배열을 arr에 저장한다.
  }

  arr.forEach(element => answer += element.join(' ') + '\n');
  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const arr = Array.from({length: N}, () => []);

for(let i = 1; i < N + 1; i++) {
  arr[i - 1] = input[i].split(' ').map(Number);
}

console.log(solution(N, M, R, arr));