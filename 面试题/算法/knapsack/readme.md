## 背包问题

背包 bagWeight 上限 4kg
最大价值 dp
物品数组 value[15, 20, 30]
    weight [1, 3, 4]

- 01背包
    - 1 拿
        重量加大了，价值大了
    - 0 不拿
        前面的最优解
        每件物品只有1件
    完全背包  物品的数量 多
    多重背包  每个物品的数量都不一样

- 暴力破解法 能不能做？ 时间复杂度 O(2^n) 

- 动态规划去解决
    - 定义dp数组 dp[i][j] 二维？ 留点印象
        最优子结构  dp[i][j] 最后一个是最值  dp[value.length-1][j]
        清楚 i j 的含义是什么？ i 表示第i个物品， j 表示背包的重量
        物品i放进容量为j的背包中，得到的最大价值

        矩阵

    - 状态转移方程
        dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]]+value[i])

    - 初始化 重要工作
        子结构的分析 状态的方向
    - 迭代
    - 返回结果


## 滚动数组   背包优化
    将二维优化为一维 ？ 老虎机 状态可以压缩
    上一行的状态计算完后，可以迭代到下一行  拷贝上一行，再来计算
    麻将牌
    - dp[j] 容量为j的背包最大价值是多少？
    - 状态转移方程
    - 初始化
        dp[0] = 0
        0
    - 迭代
        for(i = 0; i < w.length; i++){
            for(j = bagweight; j >= 0; j--){

            }
        }

        递减
        dp[2] = dp[2-1] + value[2] = 15
        