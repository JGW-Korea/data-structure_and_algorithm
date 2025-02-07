function solution(N, M, board) {
  const coinPos = []; // 두 동전의 위치를 나타낸다.

  // 두 동전의 위치를 찾아서 coinPost 배열에 추가한다.
  for(let i = 0; i < N; i++) {
    if(coinPos.length === 2) break;
    
    for(let j = 0; j < M; j++) {
      if(board[i][j] === 'o') coinPos.push([i, j]);
    }
  }

  // 상하좌우로 이동할 수 있는 좌표값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = Number.MAX_SAFE_INTEGER; // 버튼을 누른 최소 횟수

  function recursion(coin1, coin2, count) {
    if(count > 10) return; // 버튼을 누른 횟수가 10 이하일 경우에만 재귀 호출을 한다.

    // 상하좌우로 총 4번을 이동할 수 있다.
    for(let dir = 0; dir < 4; dir++) {
      let [firstX, firstY] = [coin1[0] + dx[dir], coin1[1] + dy[dir]]; // 첫 번째 코인의 다음 이동 위치
      let [secondX, secondY] = [coin2[0] + dx[dir], coin2[1] + dy[dir]]; // 두 번째 코인의 다음 이동 위치

      // 두 동전이 보드 밖으로 벗어났는지에 대한 상태를 나타낸다.
      let firstState = false;
      let secondState = false;

      // 두 동전이 보드 밖으로 벗어났는지 확인한다.
      if(firstX >= 0 && firstY >= 0 && firstX < N  && firstY < M) firstState = true;
      if(secondX >= 0 && secondY >= 0 && secondX < N  && secondY < M) secondState = true;

      // 두 동전 중 하나만 떨어지고 버튼을 누른 횟수가 10보다 작을 경우
      if(firstState ^ secondState) {
          answer = Math.min(answer, count);
          return;
      } else if(firstState && secondState){ // 두 동전 모두 보드 밖으로 떨어진 경우 또는 벽을 만난 경우

        if(board[firstX][firstY] === '#') { // 첫 번째 동전이 벽을 만난경우
          [firstX, firstY] = coin1;
        }

        if(board[secondX][secondY] === '#') { // 두 번째 동전이 벽을 만난경우
          [secondX, secondY] = coin2;
        }

        if((firstX !== coin1[0] || firstY !== coin1[1]) || (secondX !== coin2[0] || secondY !== coin2[1])) {
          recursion([firstX, firstY], [secondX, secondY], count + 1);
        }

      }
    }
  }

  // 재귀를 통해 두 동전 중 하나만 보드 밖으로 떨어지는 경우를 찾는다. (첫번째 동전 위치, 두번째 동전 위치, 버튼을 누른 횟수)
  recursion(coinPos[0], coinPos[1], 1);

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(element => element.split(''));

console.log(solution(N, M, board));