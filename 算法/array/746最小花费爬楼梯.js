/**
 * @param {number[]} cost
 * @return {number}
 */

// 注释代码自己写不出来，错误的
// 官方题解         动态规划
var minCostClimbingStairs = function(cost) {
    // let ans = 0
    // if(cost.length == 3){
    //     return Math.min(cost[1],  cost[0] + cost[2] )
    // }
    // if(cost[0] > cost[1]){
    //     var i = 1
    // }
    // else{
    //     var i = 0
    // }
    // while(i < cost.length){
    //     if(i == cost.length - 2 || i == cost.length - 1){
    //         ans += cost[i]
    //         return ans
    //     }
    //     ans += cost[i]
    //     if(cost[i + 1] >= cost[i + 2]){
    //         i = i + 2
    //     }
    //     else{
    //         i = i + 1
    //     }
    // }

    // 动态规划
    const n = cost.length
    const dp = new Array(n + 1)
    dp[0] = dp[1] = 0
    for(let i = 2; i <= n; i++){
        dp[i] = Math.min(dp[i - 1] + cost[ i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[n]
};