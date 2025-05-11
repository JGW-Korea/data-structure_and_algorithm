function solution(n, players) {
  const alpha = new Array(26).fill(0); // 알파벳 개수만큼 크기를 가진 배열을 생성한다.
  // 모든 선수의 성의 개수를 카운트 한다.
  players.forEach((player) => {
    alpha[player.charCodeAt() - 97] += 1;
  });

  // 성이 5개 이상인 선수들만 추출한다.
  const answer = [];
  alpha.forEach((count, idx) => {
    if (count >= 5) answer.push(String.fromCharCode(idx + 97));
  });

  // 성이 5개인 이상인 선수들이 있을 경우 해당 선수들을 보내고 없을 경우 기권한다.
  return answer.length ? answer.join("") : "PREDAJA";
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(solution(Number(input[0]), input.slice(1)));
