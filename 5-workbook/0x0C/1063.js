const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

// A1 ~ H8 까지의 체스판의 위치를 실제 좌표 값으로 변환 후 해당 값을 반환한다.
const convertFronNumber = (element) =>
  Number.isNaN(Number(element)) ? element.charCodeAt() - 65 : Number(element) - 1;
const convertFronBoard = (num, idx) => (idx === 0 ? num + 1 : String.fromCharCode(num + 65));

function solution(king, stone, n, moves) {
  const kingPos = king.split("").reverse().map(convertFronNumber); // 킹의 위치를 실제 좌표 값으로 수정
  const stonePos = stone.split("").reverse().map(convertFronNumber); // 돌의 위치를 실제 좌표 값으로 수정

  const moveInfo = {
    R: [0, 1], // R : 한 칸 오른쪽으로
    L: [0, -1], // L : 한 칸 왼쪽으로
    B: [-1, 0], // B : 한 칸 아래로
    T: [1, 0], // T : 한 칸 위로
    RT: [1, 1], // RT : 오른쪽 위 대각선으로
    LT: [1, -1], // LT : 왼쪽 위 대각선으로
    RB: [-1, 1], // RB : 오른쪽 아래 대각선으로
    LB: [-1, -1], // LB : 왼쪽 아래 대각선으로
  };

  for (const move of moves) {
    const [currentKingX, currentKingY] = kingPos; // 현재 킹의 위치
    const [currentStoneX, currentStoneY] = stonePos; // 현재 돌의 위치

    const [distX, distY] = moveInfo[move]; // 다음 이동 경로 값

    const [nextKingX, nextKingY] = [currentKingX + distX, currentKingY + distY];

    // 킹의 다음 위치가 체스판 밖으로 나갈 경우
    if (nextKingX < 0 || nextKingY < 0 || nextKingX >= 8 || nextKingY >= 8) continue;
    else {
      // 킹을 옮긴 위치에 돌이 있을 경우 돌을 같은 방향으로 이동
      if (nextKingX === currentStoneX && nextKingY === currentStoneY) {
        const [nextStoneX, nextStoneY] = [currentStoneX + distX, currentStoneY + distY];
        if (nextStoneX < 0 || nextStoneY < 0 || nextStoneX >= 8 || nextStoneY >= 8) continue; // 돌의 다음 위치가 체스판 밖으로 나갈 경우

        stonePos[0] = nextStoneX;
        stonePos[1] = nextStoneY;
      }

      kingPos[0] = nextKingX;
      kingPos[1] = nextKingY;
    }
  }

  return kingPos.map(convertFronBoard).reverse().join("") + "\n" + stonePos.map(convertFronBoard).reverse().join("");
}

const [king, stone, N] = input[0].split(" ").map((element) => (isNaN(element) ? element : Number(element)));
const moves = input.slice(1);

console.log(solution(king, stone, N, moves));
