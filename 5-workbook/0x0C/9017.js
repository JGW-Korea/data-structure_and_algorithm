const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

function solution(n, t) {
  let teams = {};

  // 팀 구성
  t.forEach((team) => {
    // 해당 팀이 있을 경우
    if (teams[team]) {
      teams[team]["count"] += 1;
    }

    // 팀이 없을 경우
    else {
      teams[team] = {
        count: 1,
        score: [],
        total: 0,
      };
    }
  });

  // 팀 점수 계산
  let score = 1;
  t.forEach((team) => {
    if (teams[team]["count"] < 6) return; // 팀 인원이 6명 이하일 경우

    teams[team]["score"].push(score);

    // 상위 4명만 계산
    if (teams[team]["score"].length <= 4) {
      teams[team]["total"] += score;
    }
    score++;
  });

  const answer = [0, Number.MAX_SAFE_INTEGER]; // 점수 합산이 제일 낮은 팀 번호 + 총 점수
  Object.keys(teams).forEach((team) => {
    if (
      teams[team]["count"] < 6 ||
      (answer[1] === teams[team]["total"] && teams[answer[0]]["score"][5 - 1] < teams[team]["score"][5 - 1])
    )
      return;

    // 현재 팀의 점수가 다른 팀의 점수랑 동일하지 않으면서 현재 팀의 점수가 이전 팀의 점수보다 낮을 경우
    if (answer[1] !== teams[team]["total"] && teams[team]["total"] < answer[1]) {
      [answer[0], answer[1]] = [team, teams[team]["total"]];
    }

    // 현재 팀의 점수가 이전 팀의 점수랑 동일할 경우 5번째 주자의 도달 시간이 더 짧은 값으로 팀을 수정한다.
    if (answer[1] === teams[team]["total"] && teams[answer[0]]["score"][5 - 1] > teams[team]["score"][5 - 1]) {
      answer[0] = team;
    }
  });

  return answer[0];
}

const T = Number(input[0]);

let idx = 1;
let answer = "";

for (let i = 0; i < T; i++) {
  const N = Number(input[idx++]);
  const r = input[idx++].split(" ").map(Number);

  answer += solution(N, r) + "\n";
}

console.log(answer);
