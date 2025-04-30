/*
  // 문제 설명
  - 각각의 노래마다 랭킹 리스트가 있다. -> 게임할 때 마다 얻는 점수는 비오름차순으로 저장
  - 랭킹 리스트의 등수는 보통 위에서부터 몇 번째 있는 점수인지로 결정, 하지만, 같은 점수가 있을 때는 그러한 점수의 등수 중에 가장 작은 등수가 된다. (동일 등수)
    - 100, 90, 90, 80 -> 1, 2, 2, 4등
  
  - 랭킹 리스트에 올라 갈 수 있는 점수의 개수 P가 주어진다. 그리고 리스트에 있는 점수 N개가 비오름차순으로 주어지고, 태수의 새로운 점수가 주어진다. [P, N, score]
    -> 랭킹 리스트에 올라 갈 수 있는 점수의 개수 = P
    -> 현재 랭킹 리스트에 올라간 점수의 개수 -> N


  - 이때, 태수의 새로운 점수가 랭킹 리스트에서 몇 등 하는지 구하는 프로그램을 작성하시오. 
    - 만약 점수가 랭킹 리스트에 올라갈 수 없을 정도로 낮다면 -1을 출력한다.
    - 만약, 랭킹 리스트가 꽉 차있을 때, 새 점수가 이전 점수보다 더 좋을 때만 점수가 바뀐다.


  // 입력
  - 첫째 줄 [ N, newScore, P ]
    - 10 <= P <= 50
    - 0 <= N <= P (이유: 랭킹 시스템에 올라갈 수 있는 랭킹은 P 만큼이기 때문)
    - 모든 점수는 20억 이하

*/

function solution(N, newScore, P, ranks) {
  // 현재 랭킹 리스트에 올라간 점수의 개수 N이 랭킹 리스트에 올라 갈 수 있는 개수와 같으면서 마지막 점수보다 낮거나 같다면 -1을 반환
  if (N === P && ranks[N - 1] >= newScore) return -1;

  // 랭킹 시스템
  const totalRanks = new Array(P).fill(0);
  totalRanks[0] = 1;

  let currentRank = 1;

  // 현재 등록된 점수들의 랭킹 확보
  for (let i = 1; i < N; i++) {
    currentRank += 1;

    if (ranks[i - 1] === ranks[i]) totalRanks[i] = totalRanks[i - 1];
    else {
      totalRanks[i] = currentRank;
    }
  }

  // 태수의 새로운 점수가 현재 랭킹 시스템에 등록된 동일 점수가 올라온 경우
  if (ranks.indexOf(newScore) >= 0) return totalRanks[ranks.indexOf(newScore)];

  /*
    2 4 10
    18 14
  */

  if (N < P && ranks[N - 1] > newScore) return currentRank + 1;

  let answer = -1;

  for (let i = N - 1; i >= 0; i--) {
    if (newScore > ranks[i]) answer = totalRanks[i];
    else {
      return answer;
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, newScore, P] = input[0].split(" ").map(Number);
if (N === 0) console.log(1); // 랭킹 시스템에 올라간 점수가 없다면 태수가 자연스럽게 랭킹 1위가 됨
else {
  const ranks = input[1].split(" ").map(Number);
  console.log(solution(N, newScore, P, ranks));
}
