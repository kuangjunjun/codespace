/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const cnt = new Array(101).fill(0)
    const n = nums.length
    for(let i = 0; i < n; i++){
        cnt[nums[i]] += 1
    }
    for(let i = 1; i <= 100; ++i){
        cnt[i] += cnt[i - 1]
    }
    const res = []
    for(let i = 0; i < n; i++){
        res.push(nums[i] ? cnt[nums[i] - 1] : 0)
    }
    return res
};