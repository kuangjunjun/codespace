/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = new Array(nums1.length).fill(-1)
    const stack = []
    for(let i = 0; i < nums2.length; i++){
        while(stack.length && nums2[i] > stack[stack.length - 1]){
            ans[nums1.indexOf(stack[stack.length - 1])] = nums2[i]
            stack.pop()
        }
        stack.push(nums2[i])
    }
    return ans
};