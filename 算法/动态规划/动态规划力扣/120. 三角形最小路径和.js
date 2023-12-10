/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length
    if(n == 1)  return triangle[0][0]
    const dp = new Array(n)
    let min = Infinity
    for(let i = 1; i <= n; i++){
        dp[i - 1] = new Array(i)
    }
    dp[1][0] = triangle[0][0] + triangle[1][0]
    dp[1][1] = triangle[0][0] + triangle[1][1]
    for(let i = 2; i < n; i++){
        for(let j = 0; j <= i; j++){
            if(j == 0){
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            }else if(j === i ){
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            }else{
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
            }
        }
    }
    for(let i = 0; i < n;i++){
        if(dp[n - 1][i] < min) min = dp[n - 1][i]
    }
    return min
};