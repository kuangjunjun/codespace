/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1])  return nums[i]
    }
};

// 官解
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const found = new Set();
    for (const num of nums) {
        if (found.has(num)) {
            return num;
        }
        found.add(num);
    }
    // 不可能的情况
    return -1;
};
