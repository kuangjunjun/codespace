/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const arr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            arr.unshift(nums[i])
        }else{
            arr.push(nums[i])
        }
    }
    return arr
};