/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a)
    let i = nums.length
    let r = nums[0] * nums[1] * nums[2]
    let l = nums[0] * nums[i - 1] * nums[i - 2]
    return Math.max(r, l)
};