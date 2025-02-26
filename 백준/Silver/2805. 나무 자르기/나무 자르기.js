function solution(N, M, heights) {
  // 주어진 나무 중에서 가장 작은 높이와 큰 값을 가진 나무로 구분을 하는거야
  let left = 0;
  let right = Math.max(...heights);
  let answer = 0; // 절단기의 최종 높이

  // 이진 탐색 기법을 사용을 해야 되기 때문에
  while (left <= right) {
    // step 1번씩 순회될 때마다 다시 총합을 구해야되기 때문에 안에다가 적게된거지
    let total = 0; // 절단기로 자른 나무의 총합
    let mid = Math.floor((left + right) / 2); // mid -> 절단기의 높이로

    // 주어진 나무를 현재 절단기 높이로 잘라야돼
    for (let i = 0; i < N; i++) {
      if (heights[i] > mid) {
        total += heights[i] - mid; // 자른 나무만 누적이 되는거지
      }
    }

    // 적어도 M 미터의 나무를 가져갈껀데 M 미터에 근접한 나무를 구하기 위한 절단기의 높이를 구하자
    if (total >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1; // 절단기의 높이를 올리기 위함
    } else {
      right = mid - 1; // 절단기의 높이를 낮추게 되는거지
    }
  }

  return answer;
}

const fs = require("fs"); // CommonJS 모듈 방식
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);

console.log(solution(N, M, heights));
