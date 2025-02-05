function solution(N) {
  // N 크기의 1차원 배열을 만들고 각 value 값을 행의 역할을 하게 된다.
  // [0] -> 1 : 1 x 1 위치에 퀸을 놓았다는 의미
  let board = new Array(N).fill(0); 
  let count = 0;

  // 체스판에 놓여진 퀸들이 서로 공격할 수 있는지 확인한다.
  function check(current) {
    for(let i = 0; i < current; i++) {

      // 절대값을 이용하면 대각선의 위치가 같은 선상에 있는지 확인할 수 있다.
      if(board[i] === board[current] || Math.abs(board[i] - board[current]) === current - i) {
        return false;
      }
    }

    return true;
  }
  
  // 백트래킹을 이용한다. currentLength는 퀸을 놓는 위치가 보드의 어느 위치인지 명시한다.
  function dfs(currentLength) {
    if(currentLength === N) { // 퀸이 board의 끝까지 위치해있을 경우
      count += 1;
      return;
    }

    for(let i = 1; i <= N; i++) {
      board[currentLength] = i; // 일단 현재 위치에 퀸을 놓는다.

      // 현재 위치에 놓여진 퀸이 다른 퀸들을 공격할 수 있는지 확인한다.
      if(check(currentLength)) { 
        dfs(currentLength + 1);
      }
    }
    
  }

  dfs(0);

  return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(solution(Number(input)));