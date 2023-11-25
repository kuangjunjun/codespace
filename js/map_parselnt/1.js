// - map 遍历, callback 返回值 新的数组
// 1   parseInt(1, 0, [1, 2, 3])       写0是无效的，10进制，1
// 2   parseInt(2, 1, [1, 2, 3])          1进制，不可能有2， NaN
// 3   parseInt(3, 2, [1, 2, 3])          2进制，不可能有3(011)， NaN
console.log([1, 2, 3].map(parseInt));