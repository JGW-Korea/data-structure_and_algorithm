function solution(N, times) {
  /*
  [N][0] = 회의 시작 시간
  [N][1] = 회의 끝나는 시간
  [
    a: [ 1, 4 ],   b: [ 3, 5 ],
    [ 0, 6 ],   [ 5, 7 ],
    [ 3, 8 ],   [ 5, 9 ],
    [ 6, 10 ],  [ 8, 11 ],
    [ 8, 12 ],  [ 2, 13 ],
    [ 12, 14 ]
  ]
  */
  // 한 개의 회의실에서 사용할 수 있는 최대의 회의실 개수
  // 회의가 끝나지 않으면 사용이 불가능 X
  // 끝나는 시간에 맞춰서 정렬을 해야되고 (오름차순), 끝나는 시간이 같으면 시작 시간을 기준으로 정렬을 해야돼 (오름차순)
  times.sort((a, b) => {
    // 끝나는 시간을 먼저 정렬을 해야되는거잖아
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    // 시작 시간을 기준으로 오름차순 정렬
    return a[0] - b[0];
  });

  let answer = 1; // 회의의 개수(첫 번째 회의는 반드시 참여할 수 있다고 가정)
  let endTime = times[0][1];

  for (let i = 1; i < times.length; i++) {
    if (endTime <= times[i][0]) {
      answer += 1;
      endTime = times[i][1];
    }
  }

  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const times = [];

for (let i = 1; i < input.length; i++) {
  times.push(input[i].split(" ").map(Number));
}

console.log(solution(N, times));
