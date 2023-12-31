/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n + 1)
    dp[1] = 1
    dp[2] = 1
    for(let i = 3; i <= n; i++){
        dp[i] = 0
        for(let j = 1; j <= i - j; j++){
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        } 
    }
    return dp[n]
};