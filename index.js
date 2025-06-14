function solution(h1, m1, s1, h2, m2, s2) {
  let answer = 0; // 알림이 울린 횟수

  let flag = false; // 처음 시점인지 확인
  for (let h = h1; h < h2 + 1; h++) {
    for (let m = !flag ? m1 : 0; m < 60; m++) {
      for (let s = !flag ? s1 : 0; s < 60; s++) {
        if (!flag) flag = true; // 처음 시점 이후 초기값이 m1, s1이 아닌, 0부터 시작

        console.log(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
        );

        if (s === m || s === h) {
          console.log("answer + 1");
          console.log();
          answer += 1;
        }
        if (h === h2 && m === m2 && s === s2) return answer;
      }
    }
  }
}

solution(0, 5, 30, 0, 7, 0);
