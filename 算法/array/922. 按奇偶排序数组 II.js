/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const arr = new Array(nums.length)
    let os = 0, js = 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            arr[os] = nums[i]
            os += 2
        }else{
            arr[js] = nums[i]
            js += 2
        }
    }
    return arr
};