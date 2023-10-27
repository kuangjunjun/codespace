var removeDuplicates = function(nums) {
    if(nums.length <= 2){
        return nums.length
    }
    let l = 2, r = 2
    while(r < nums.length){
        if(nums[l - 2] != nums[r]){
            nums[l] = nums[r]
            l++
        }
        r++
    }
    return l
};