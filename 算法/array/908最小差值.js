/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    nums.sort((a, b) => a-b)
    if(nums.length == 1){
        return 0
    }
    if((nums[0] + k) >= (nums[nums.length - 1] - k)){
        return 0
    }else{
        return nums[nums.length - 1] - nums[0] -2 * k
    }
};