const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, paper) {
  const answer = [0, 0, 0]; // -1, 0, 1로만 채워진 종이의 개수를 담는 1차원 배열

  // 종이를 자르기 위해서는 반드시 재귀를 이용해야 함
  function divide(row, col, length) {
    const size = length * length; // 현재 종이의 크기

    // 현재 Row x Col 크기의 종이에서 -1, 0, 1의 개수를 카운팅
    const count = [0, 0, 0];
    for (let i = row; i < row + length; i++) {
      for (let j = col; j < col + length; j++) {
        switch (paper[i][j]) {
          case -1:
            count[0] += 1;
            break;
          case 0:
            count[1] += 1;
            break;
          case 1:
            count[2] += 1;
            break;
        }
      }
    }

    if (count.includes(size)) answer[count.indexOf(size)] += 1; // -1, 0, 1로만 채워진 종이가 존재할 경우
    else {
      length = Math.floor(length / 3);

      // 종이를 9등분으로 나눔
      divide(row, col, length);
      divide(row, col + length, length);
      divide(row, col + length * 2, length);

      divide(row + length, col, length);
      divide(row + length, col + length, length);
      divide(row + length, col + length * 2, length);

      divide(row + length * 2, col, length);
      divide(row + length * 2, col + length, length);
      divide(row + length * 2, col + length * 2, length);
    }
  }

  divide(0, 0, N);

  return answer.join("\n");
}

const [N, paper] = [Number(input[0]), input.slice(1).map((el) => el.split(" ").map(Number))];
console.log(solution(N, paper));
