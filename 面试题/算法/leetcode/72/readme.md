- 动态规划的复习
    系统  代码随想录  dp

    - 算法思想
    - 区别于流程逻辑的算法思想

    - 编辑距离
        抽象

    - 最值 动态规划
        - 定义dp 数组
            dp[i][j]
            最优子结构，局部最优 -> 推到全局最优
            dp[m][n]
            明确这个数组的意义是什么？  空字符 -> 
            word[i-1] 和 word[j-1] 之间的编辑距离
        - 状态转移方程
            dp[i][j]   跟前面状态的关系   最优的
                dp[i-1][j-1] | dp[i-1][j-1] + 1  左上角
                dp[i-1][j]
                dp[i][j-1]

                for(i){
                    for(j){
                        if(w1[i] == w2[j]){
                            dp[i][j] = dp[i-1][j-1]
                        }else{
                            // 加    删除的反状态
                            // 删除  dp[i-1][j] + 1  dp[i][j-1] + 1
                            // 换    dp[i-1][j-1] + 1
                        }
                    }
                }

        - 初始化