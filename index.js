function solution(N, times) {
  // 회의실 사용 시간표를 끝나는 시간으로 오름차순 정렬을 시킨다.
  times.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];

    // 두 스케줄의 끝나는 시간이 동일할 경우 시작 시간을 기준으로 오름차순 정렬을 한다.
    return a[0] - b[0];
  });

  let answer = 1; // 최대 사용 회의 개수 (첫 번째 회의는 반드시 선택된다.)
  let currentEnd = times[0][1]; // 현재 회의가 끝나는 시간을 명시한다.

  // 2 ~ N 까지 회의실 시작 시간을 비교한다.
  for (let i = 1; i < N; i++) {
    // 현재 끝나는 시간이 다음 회의 시작 시간보다 작거나 같을 경우 다음 회의 진행
    if (currentEnd <= times[i][0]) {
      answer += 1;
      currentEnd = times[i][1]; // 회의 끝나는 시간을 갱신한다.
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("index.txt").toString().trim().split("\n");

const N = Number(input[0]);
const times = []; // 시간표를 저장

for (let i = 1; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  times.push([start, end]);
}

console.log(solution(N, times));
