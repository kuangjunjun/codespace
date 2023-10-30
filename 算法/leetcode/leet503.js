/**
 * @param {number[]} nums
 * @return {number[]}
 */

 //[1,2,3,4,3]
 var nextGreaterElements = function(nums) {
    const stack = []
    let n = nums.length
    const ans = new Array(nums.length).fill(-1)
    for(let i = 0; i < 2*n - 1; i++){
        while(stack.length && nums[stack[stack.length - 1]] < nums[i % n]){
            ans[stack[stack.length - 1]] = nums[i % n]
            stack.pop()
        }
        stack.push(i % n )
    }
    return ans
};