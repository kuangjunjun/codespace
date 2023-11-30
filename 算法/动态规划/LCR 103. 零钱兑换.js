var coinChange = function (coins, amount) {
    // 每个目标金额对应的最少硬币个数
    const f = []
    f[0] = 0

    for (let i = 1; i <= amount; i++){
        f[i] = Infinity  // 不同金额的最小硬币个数

        for (let j = 0; j < coins.length; j++){
            if (i - coins[j] >= 0) {    // 这个硬币能用
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)  // 找状态转移方程
            }
        }
    }
    return f[amount] === Infinity ? -1 : f[amount]
};