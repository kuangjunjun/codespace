/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr = nums.map(num => num * num)
    return arr.sort((a, b) => a - b)
};