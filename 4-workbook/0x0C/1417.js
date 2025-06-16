function solution(N, person) {
  if (N === 1) return 0;

  // 후보자가 2명 이상일 경우
  let answer = 0;

  while (true) {
    let maxIdx = 1; // 가장 많은 득표수를 가진 후보자의 위치를 가져온다.
    for (let i = maxIdx + 1; i < person.length; i++) {
      if (person[maxIdx] < person[i]) {
        maxIdx = i;
      }
    }

    // 가장 많은 득표수를 가진 후보자의 지지자의 한 명을 매수한다.
    if (person[0] <= person[maxIdx]) {
      person[0] += 1;
      person[maxIdx] -= 1;
      answer += 1;
    }

    const maxVotes = person.filter((element) => element === Math.max(...person)); // 가장 많은 득표수를 가진 인원 조회

    // 가장 많은 득표수를 가진 사람이 한 명이면서 그 사람이 다솜이일 경우
    if (maxVotes.length === 1 && maxVotes[0] === person[0]) return answer;
  }
}

const [N, ...rest] = require("fs").readFileSync("index.txt").toString().trim().split("\n").map(Number);
console.log(solution(N, rest));
