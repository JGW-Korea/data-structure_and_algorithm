function solution(triangle) {
    const N = triangle.length;
    const dp = Array.from({ length: N }, () => new Array(N).fill(0));
    
    dp[0][0] = triangle[0][0];
    
    for(let i = 0; i < N - 1; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + triangle[i + 1][j]);
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + triangle[i + 1][j + 1]);
        }
    }
    
    return Math.max(...dp[N - 1]);
}