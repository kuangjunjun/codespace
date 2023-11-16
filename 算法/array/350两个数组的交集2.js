/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let l = 0, r = 0, ans = []
    while(l < nums1.length && r < nums2.length){
        if(nums1[l] === nums2[r] ){
            ans.push(nums1[l])
            r++
            l++
        }else{
            nums1[l] < nums2[r] ? l++ : r++
        }
    }
    return ans
};