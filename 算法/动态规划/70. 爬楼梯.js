/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   let dp = []
   dp[1] = 1
   dp[2] = 2
   for(let i = 3; i <= n; i++){
       dp[i] = dp[i - 1] + dp[i - 2]
   }
   return dp[n]
};

var climbStairs = function(n) {
    if(n <= 1)    return n
    let a = 1, b = 2
    for(let i = 3; i <= n; i++){
        [a, b] = [b, a + b]
    }
    return b
  };