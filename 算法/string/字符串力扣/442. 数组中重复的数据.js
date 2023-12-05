/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     const swap = (nums, index1, index2) => {
//         const temp = nums[index1]
//         nums[index1] = nums[index2]
//         nums[index2] = temp
//     }
//     const n = nums.length
//     for(let i = 0; i < n; ++i){
//         while(nums[i] != nums[nums[i] - 1]){
//             swap(nums, i, nums[i] - 1)
//         }
//     }
//     const ans = []
//     for(let i = 0; i < n; ++i){
//         if(nums[i] - 1 !== i){
//             ans.push(nums[i])
//         }
//     }
//     return ans
// };

var findDuplicates = function(nums){
    const ans = new Array()
    for(let i = 0; i < nums.length; i++){
        const org = Math.abs(nums[i])
        if(nums[org - 1] > 0){
            nums[org - 1] *= -1
        }else{
            ans.push(org)
        }
    }
    return ans
}