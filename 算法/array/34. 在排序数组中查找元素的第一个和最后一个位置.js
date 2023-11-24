/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var lowerBound = function (nums, target){
    let left = 0, right = nums.length - 1;
    while(left <= right){
        // 循环不变量
        // nums[left - 1] < target
        // nums[right + 1] > target
        const mid = Math.floor((right + left) / 2)
        if(nums[mid] < target)  left = mid + 1
        else    right = mid - 1
    }
    return left
}
var searchRange = function(nums, target) {
    const start = lowerBound(nums, target)
    if(start === nums.length || nums[start] !== target) return [-1, -1]
    const end = lowerBound(nums, target + 1) - 1
    return [start, end]
};