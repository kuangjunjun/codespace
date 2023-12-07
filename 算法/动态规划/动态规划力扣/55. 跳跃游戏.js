/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end = nums.length - 1

    for(let i = nums.length - 2; i >= 0; i--){
        if(end - i <= nums[i]){
            end = i
        }
    }

    return end == 0
};