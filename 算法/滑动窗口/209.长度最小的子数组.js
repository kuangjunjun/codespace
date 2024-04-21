/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity
    let sum = 0, j = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        while(sum >= target){
            result = Math.min((i - j + 1), result)
            sum -= nums[j]
            j++
        }
    }

    return result === Infinity ? 0 : result
};