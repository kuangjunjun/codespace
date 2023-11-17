/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1, maxcount = 1
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i + 1] > nums[i]){
            count++
        }else{
            maxcount = Math.max(maxcount, count)
            count = 1
        }
    }
    maxcount = Math.max(maxcount, count)
    return maxcount
};

 // 官解
var findLengthOfLCIS = function(nums) {
    let ans = 0
    const n = nums.length
    let start = 0
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] <= nums[i - 1]){
            start = i
        }
        ans = Math.max(ans, i - start + 1)
    }
    return ans
};