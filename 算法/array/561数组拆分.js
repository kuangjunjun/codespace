/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    let sums = 0
    for(let i = 0; i < nums.length; i = i + 2){
        sums += nums[i]
    }
    return sums
};