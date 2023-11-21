/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc = true, dec = true
    const n = nums.length
    for(let i = 0; i < n - 1; i++){
        if(nums[i] > nums[i + 1]){
            inc = false
        }
        if(nums[i] < nums[i + 1]){
            dec = false
        }
    }
    return inc || dec
}