function solution(n, board) {
  let maxBlock = 0; // 5번 이동 후 블록의 최대 크기

  // 2차원 배열을 90도 회전
  function rotate(board) {
    const temp = Array.from({length: n}, () => new Array(n).fill(0)); // 90도 회전시킨 배열을 저장하기 위한 배열

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        temp[j][n - 1 - i] = board[i][j];
      }
    }

    return temp;
  }
  
  function tild(dir, board) {
    while(dir--) {
      board = rotate(board);
    }

    for(let i = 0; i < n; i++) {
      const tilted = new Array(n).fill(0); // 보드의 기울임을 행 방향으로 처리
      let idx = 0;

      // 보드의 기울임을 각 행을 처리한다.
      for(let j = 0; j < n; j++) {
        if(board[i][j] === 0) continue;
        if(tilted[idx] === 0) tilted[idx] = board[i][j];
        else if(tilted[idx] === board[i][j]) tilted[idx++] *= 2;
        else tilted[++idx] = board[i][j];
      }

      // 각 행에 대한 기울임을 원본 보드에 적용하기 위한 로직
      for(let j = 0; j < n; j++) {
        board[i][j] = tilted[j];
      }
    }

    return board;
  }
  
  for(let block = 0; block < 1024; block++) {
    let temp = board.map(row => [...row]); // 주어진 보드의 5번 이동에 대한 모든 결과를 계산하기 위해 임시 배열을 만든다.
    let brute = block;

    // 임시 배열을 5번씩 이동시켜 블록의 최대 크기를 계산한다.
    for(let i = 0; i < 5; i++) {
      temp = tild(brute % 4, temp);
      brute = Math.floor(brute / 4);
    }

    // 현재 임시 배열에서 현재 블록의 최대값과 임시 배열의 블록의 최대값과 비교한다.
    temp.forEach(element => maxBlock = Math.max(maxBlock, ...element));
  }

  return maxBlock;
}


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const board1 = Array.from({length: N}, () => []);

for(let i = 1; i <= N; i++) {
  board1[i-1] = input[i].split(' ').map(Number);
}

console.log(solution(N, board1));