/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //    if(nums.indexOf(1) == -1) return 0
    //    let left = 0, right = 0, ans = 0   错误！！！
    //    while(right < nums.length){
    //        if(nums[right] == 0){
    //            ans = Math.max(ans, right - left)
    //            right++
    //        }
    //        else{
    //            if(right ==0 ||nums[right - 1] == 0 ){
    //                left = right
    //            }
    //            right++
    //            if(right == nums.length){
    //                ans = Math.max(ans, right - left)
    //            }
    //        }
    //    }
    //    return ans
    
        let maxCount = 0, count = 0
        const n = nums.length
        for(let i = 0; i < n; i++){
            if(nums[i] === 1){
                count++
            }
            else{
                maxCount = Math.max(maxCount, count)
                count = 0
            }
        }
        maxCount = Math.max(maxCount, count)
        return maxCount
    };