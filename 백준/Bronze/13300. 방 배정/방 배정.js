function solution(students, k) {
  // 편의상 길이를 7까지 하고, 각 요소에는 2개의 배열이 있다. [ [ 여학생: 방 개수, 인원 ], [남학생: 방 개수, 인원] ]
  const years = Array.from({length: 7}, () => Array.from({length: 2}, () => [0, 0]));

  // 학년, 성별에 맞는 방에 인원을 넣는다.
  for(const [sex, year] of students) {
    years[year][sex][1] += 1;
    years[year][sex][0] = Math.ceil(years[year][sex][1] / k);
  }

  let sum = 0;

  // 방의 개수를 합한다.
  for(let i = 1; i < years.length; i++) {
    for(let j = 0; j < years[i].length; j++) {
      sum += years[i][j][0];
    }
  }

  return sum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const students = Array.from({length: n}, () => []);

for(let i = 1; i <= n; i++) {
  students[i - 1] = input[i].split(' ').map(Number);
}

console.log(solution(students, k));