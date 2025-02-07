function solution(n, map) {
  let [blue, white] = [0, 0]; // 각 색종이의 개수

  function recursion(row, col, length) {
    let sum = 0; // 각 영역의 length * length의 색종이 합계

    // 현재 row, col 위치부터 분할된 영역의 끝까지 순회하면서 sum 값을 갱신해 나간다.
    for(let x = row; x < row + length; x++) {
      for(let y = col; y < col + length; y++) {
         sum += map[x][y];
      }
    }

    // sum의 합계가 length * length일 경우에는 모든 영역이 파란색 색종이라는 의미
    if(sum === length * length) blue += 1;
    else if(sum === 0) white += 1; // 합계가 0일 경우 모든 영역이 흰색 색종이라는 의미
    else {
      // length / 2인 값은 똑같은 크기의 네 개의 색종이의 가로 * 세로 길이에 해당한다.
      length = Math.floor(length / 2);
      recursion(row, col, length); // 1 사분면에 해당
      recursion(row, col + length, length) // 2사분면에 해당
      recursion(row + length, col, length)// 3사분면에 해당
      recursion(row + length, col + length, length)// 4사분면에 해당
    }
    
  }
  
  recursion(0, 0, n); // 분할을 위한 row, col, length

  return white + "\n" + blue;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const map = input.slice(1).map(element => element.split(' ').map(Number));

console.log(solution(n, map));