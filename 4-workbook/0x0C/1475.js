function solution(N) {
  const numbers = new Array(10).fill(0); // 0-9번까지 숫자가 들어있는 플라스틱 숫자

  for (let i = 0; i < N.length; i++) {
    let current = N[i]; // 현재 들고있는 숫자

    // 현재 들고있는 숫자 번호가 6 또는 9일 경우 뒤집을 수 있는지 여부 확인 후 뒤집음
    switch (current) {
      case 9:
        if (numbers[current] !== 0 && numbers[6] < numbers[9]) current = 6;
        break;
      case 6:
        if (numbers[current] !== 0 && numbers[9] < numbers[6]) current = 9;
        break;
    }

    // 들고있는 카드 번호를 증가시킨다.
    numbers[current] += 1;
  }

  // 최종적으로 가장 많은 숫자가 다솜이가 필요한 세트의 개수이다.
  return Math.max(...numbers);
}

const N = require("fs").readFileSync("index.txt").toString().trim().split("").map(Number);
console.log(solution(N));
