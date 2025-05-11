function solution(N, m, M, T, R) {
  if (M < m + T && m - R < m) return -1; // 초기 맥박에서 운동을 해도 최대 맥박을 넘어가면서 운동을 쉬어도 초기 맥박 이하로 떨어질 경우 -1반환

  let answer = 0; // N분만큼 운동을 하기 위해 지난 시간

  let current = m; // 현재 맥박을 초기 맥박 값으로 초기화
  let time = 0; // 운동을 한 시간

  while (time !== N) {
    // 운동을 하지 않고 휴식을 취한 경우
    if (current + T > M) {
      if (current - R < m) current = m;
      else current -= R;
    } else {
      current += T; // 운동을 한 경우
      time += 1;
    }

    answer += 1;
  }

  return answer;
}

const fs = require("fs");

// N -> 운동 시간
// m -> 초기 맥박
// M -> 최대 맥박값
// T -> 운동 시 맥박 증가값
// R -> 휴식 시 맥박 감소값
const [N, m, M, T, R] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(solution(N, m, M, T, R));
