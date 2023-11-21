/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i)
    }
    nums.sort((a, b) => a - b)
    if(nums[nums.length - 1] >= (2 * nums[nums.length - 2])){
        return map.get(nums[nums.length - 1])
    }else{
        return -1
    }
};