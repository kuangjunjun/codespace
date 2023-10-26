let nums = [3, 2, 3]

var majorityElement = function (nums) {
    const cnt = new Map()
    for (let i = 0; i < nums.length; i++){
        if (cnt.has(nums[i])) {
            cnt.set(nums[i], cnt.get(nums[i]) + 1)
        }
        else {
            cnt.set(nums[i], 1)
        }
    }
    let array = []
    for (const x of cnt.keys()) {
        if (cnt.get(x) > Math.floor(nums.length / 3)){
            array.push(x)
        }
    }
    return array
};
console.log(majorityElement(nums));