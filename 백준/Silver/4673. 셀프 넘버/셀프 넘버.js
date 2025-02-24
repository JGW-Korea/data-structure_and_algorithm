const selfNumber = new Array(10001).fill(false);
// 셀프 넘버를 체크해서 filter를 하는 것보다 값을 할당 하는것이 더 공간 + 시간 상으로 최적화 가능

for (let num = 1; num < 10001; num++) {
  selfNumber[
    num
      .toString()
      .split("")
      .reduce((sum, curr) => (sum += Number(curr)), num)
  ] = true;
}

let answer = "";

for (let i = 1; i < 10001; i++) {
  if (!selfNumber[i]) answer += i + "\n";
}

console.log(answer);