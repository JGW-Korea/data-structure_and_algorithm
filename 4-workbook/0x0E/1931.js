const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

function solution(N, schedules) {
  // 회의실 이용 시간을 끝나는 시간을 기준으로 정렬한다.
  // 끝나는 시간이 같을 경우에는 시작 시간을 기준으로 정렬한다.
  schedules.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

  // 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 구한다.
  let [answer, currentEnd] = [1, schedules[0][1]];
  for (let i = 1; i < N; i++) {
    if (currentEnd <= schedules[i][0]) {
      currentEnd = schedules[i][1];
      answer += 1;
    }
  }

  return answer;
}

const N = Number(input[0]);
const schedules = input.slice(1).map((el) => el.split(" ").map(Number));

console.log(solution(N, schedules));
