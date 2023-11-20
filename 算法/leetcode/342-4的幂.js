var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};

// 官解，纯数学思路，题解有些看不懂
