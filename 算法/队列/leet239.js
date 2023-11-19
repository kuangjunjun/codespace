// let arr = [1, 3, -1, -3, 5, 3, 6, 7]
// var maxSlidingWindow = function(nums, k) {
//     let left = 0, right = k - 1, res = []
//     while (right < nums.length) {
//         const max = calMax(left, right)
//         res.push(max)
//         left++
//         right++
//     }


//     function calMax(x, y) {
//         let maxNum = -Infinity
//         for (let i = x; i <= y; i++) {
//             if (nums[i] > maxNum) {
//                 maxNum = nums[i]
//             }
//         }
        
//         return maxNum
//     }

//     return res

// };



let arr = [1, 3, -1, -3, 5, 3, 6, 7]

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// let arr = [1, 3, -1, -3, 5, 3, 6, 7]
// var maxSlidingWindow = function(nums, k) {
//     let left = 0, right = k - 1, res = []
//     while (right < nums.length) {
//         const max = calMax(left, right)
//         res.push(max)
//         left++
//         right++
//     }


//     function calMax(x, y) {
//         let maxNum = -Infinity
//         for (let i = x; i <= y; i++){
//             if (nums[i] > maxNum) {
//                 maxNum = nums[i]
//             }
//         }
//         return maxNum
//     }

//     return res

// };

function maxSlidingWindow(nums, k) {
    // 在窗口移动的过程中， 只根据发生变化的元素对最大值进行更新
    const len = nums.length
    const res = []
    const deque = []
    for (let i = 0; i < len; i++){
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop()
        }
        deque.push(i)

        // 队头元素是不是已经出窗口了
        if(deque[0] <= i - k)   deque.shift()

        if (i >= k - 1) {   // 开始记录最大值
            res.push(nums[deque[0]])
        }

    }
    return res
}