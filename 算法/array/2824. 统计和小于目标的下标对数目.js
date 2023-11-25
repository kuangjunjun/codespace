/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = 0
    for(let i = 0, j = nums.length - 1; i < j; i++){
        while(i < j && nums[i] + nums[j] >= target){
            j--
        }
        res += j - i
    }
    return res
};