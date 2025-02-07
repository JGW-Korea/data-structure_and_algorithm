// 킹과 돌이 이동하는 칸이 체스판을 벗어나는지 확인한다.
function check(x, y) {
  if(x < 0 || y < 0 || x >= 8 || y >= 8) return true;
  return false;
}

function current(x, y, move) {
  switch(move) {
    case 'R':
      [x, y] = [0, 1];
      break;
    case 'L':
      [x, y] = [0, -1];
      break;
    case 'T':
      [x, y] = [-1, 0];
      break;
    case 'B':
      [x, y] = [1, 0];
      break;
    case 'RT':
      [x, y] = [-1, 1];
      break;
    case 'LT':
      [x, y] = [-1, -1];
      break;
    case 'RB':
      [x, y] = [1, 1];
      break;
    case 'LB':
      [x, y] = [1, -1];
      break;
  }

  return [x, y];
}

function solution(king, stone, n, input) {
  // 8 * 8 크기의 체스판을 만든다.
  const board = Array.from({length: 8}, () => new Array(8).fill(0));

  // 입력으로 주어진 킹과 돌의 위치를 X, Y 좌표로 표현한다.
  let [kingX, kingY] = [7 - (Number(king[1]) - 1), king[0].charCodeAt() - 65];
  let [stoneX, stoneY] = [7 - (Number(stone[1]) - 1), stone[0].charCodeAt() - 65];

  // 체스판에 킹과 돌의 위치를 명시한다.
  board[kingX][kingY] = 1;
  board[stoneX][stoneY] = 2;

  for(let i = 0; i < n; i++) {
    let [dx, dy] = current(0, 0, input[i]); // 현재 움직일 이동에 대한 좌표를 가져온다.

    let [nextX, nextY] = [kingX + dx, kingY + dy]; // 이동하는 칸에 대해 계산한다.

    if(check(nextX, nextY)) continue;
    if(board[nextX][nextY] === 2) { // 이동하는 칸에 돌이 있을 경우
      if(check(stoneX + dx, stoneY + dy)) continue;

      // 돌의 위치를 옮긴다.
      board[stoneX][stoneY] = 0;
      board[stoneX + dx][stoneY + dy] = 2;

      // 킹의 위치를 옮긴다.
      board[kingX][kingY] = 0;
      board[nextX][nextY] = 1;

      // 킹과 돌의 위치를 갱신한다.
      [kingX, kingY] = [nextX, nextY];
      [stoneX, stoneY] = [stoneX + dx, stoneY + dy];

    } else { // 이동하는 칸에 돌이 없는 경우
      // 킹의 위치를 옮긴다.
      board[kingX][kingY] = 0;
      board[nextX][nextY] = 1;

      // 킹의 위치를 갱신한다.
      [kingX, kingY] = [nextX, nextY];
    }
  }

  // 킹과 돌의 마지막 위치를 문자열로 변환
  board.forEach((element, i) => {
    element.forEach((item, j) => {
      if(item === 1) {
        king = String.fromCharCode(j + 65) + (7 - i + 1);
      }
      if(item === 2) {
          stone = String.fromCharCode(j + 65) + (7 - i + 1);
      }
    });
  })

  return king + '\n' + stone;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [kingPos, stonePos, n] = input[0].split(" ");
console.log(solution(kingPos, stonePos, Number(n), input.slice(1)));
