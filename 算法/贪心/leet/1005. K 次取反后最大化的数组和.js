/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let sum = 0
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0 && k > 0){
            nums[i] = -nums[i]
            k--
        }
        sum += nums[i]
    }
    if(k % 2){
        sum -= 2 * nums[nums.length - 1]
    }
    return sum
};