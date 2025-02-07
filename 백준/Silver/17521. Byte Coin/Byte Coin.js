function solution(n, w, coinPrices) {
  let idx = 0;
  
  while(idx < n) {
    let hoidCoins = 0; // 가지고 있는 코인 수
    
    // 가장 낮은 구간 선택
    for(let i = idx + 1; i < coinPrices.length; i++) {
      if(coinPrices[idx] < coinPrices[i]) break;
      idx = i;
    }
    
    // 코인 구매하기 및 소지하고 있는 현금 갱신
    hoidCoins = Math.floor(w / coinPrices[idx]);
    w %= coinPrices[idx];
    
    // 가장 높은 구간 선택
    for(let i = idx + 1; i < coinPrices.length; i++) {
      if(coinPrices[idx] > coinPrices[i]) break;
      idx = i;
    }
    
    // 코인 현금화 시키기
    w += hoidCoins * coinPrices[idx];
    
    idx += 1;
  }

  return w;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, W] = input[0].split(' ');
const coinPrices = new Array(N);

for(let i = 1; i < input.length; i++) {
  coinPrices[i - 1] = Number(input[i]);
}

console.log(solution(N, W, coinPrices));