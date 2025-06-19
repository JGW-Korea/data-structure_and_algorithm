function solution(X, Y) {
  if (X === Y) return 0; // 입력으로 주어진 원숭이와 멍멍이의 키가 같을 경우 0일을 반환한다.

  let dif = Y - X; // 원숭이와 멍멍이의 키 차이를 구한다.
  let day = 0;

  // 키 차이는 최소 1에서 최대 2^31까지이기 때문에 반복문을 통해 점화식을 성립한다.
  for (let i = 1; i < 2 ** 31; i++) {
    for (let j = 0; j < 2; j++) {
      if (dif <= 0) {
        // 원숭이와 멍멍이의 키 차이가 0보다 작거나 같아질 경우 값을 반환한다.
        return day;
      }

      day += 1; // 날짜를 증가시킨다.
      dif -= i; // 첫째날부터 마지막날까지의 늘린 양의 키를 빼준다.
    }
  }
}

const fs = require("fs");
const [X, Y] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(solution(X, Y));
