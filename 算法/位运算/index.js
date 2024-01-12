// const num1 = 5 // 101
// const num2 = 6 // 110
// const res = num1 & num2 // 100  // 4
// console.log(res);

const n = 16  // num = 2 ^ k   10000
// 10000
// 01111

function test(n) {
    if (n <= 0) return false
    return (n & (n - 1)) === 0
}

console.log(test(n));
