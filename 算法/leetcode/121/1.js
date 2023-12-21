// 低买高卖
// 最低价格买入, 最高价格卖出   贪心算法 greedy
const maxProfit = function (price) {
// 流程  自顶向下 递归
    // 当天卖 dp[i] = Math.max((price - min), dp[i - 1])
    // 自下向上 迭代    相信每一个dp[i]， 最优子结构
    // dp[0] = 0
    const dp = new Array(price.length).fill(0)
    let min = price[0]
    for (let i = 1; i < price.length; i++){
        min = Math.min(price[i], min)
        dp[i] = Math.max(price[i] - min, dp[i - 1])
    }
    return dp[price.length - 1]
}

console.log(maxProfit([7,1,5,3,6,4]));