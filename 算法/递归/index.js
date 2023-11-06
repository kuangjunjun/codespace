// 5!  == 5 * 4 * 3 * 2 * 1

function mul(n) {   //mul 它就是可以计算阶乘
    if (n == 1) {
        return 1
    }
    return n * mul(n - 1)
}

mul(5)