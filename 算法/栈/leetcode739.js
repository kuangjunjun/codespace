
// var dailyTemperatures = function(temperatures) {
//     const len = temperatures.length
//     const stack = []
//     const res = new Array(len).fill(0)
//     for (let i = 0; i < len; i++){
//         //存在打破递减趋势的温度
//         while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
//             const top = stack.pop()
//             res[top] = i - top
//         }
//         stack.push(i)
//     }
//     return res
// };

temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// 输出[1,1,4,2,1,1,0,0]
// [0, 0, 0, 0, 0, 0, 0, 0]

var dailyTemperatures = function (temperatures) {
    const len = temperatures.length
    const stack = []
    const res = new Array(8).fill(0)
    for (let i = 0; i < len; i++){
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop()
            res[top] = i - top 
        }
        stack.push(i)
    }
    return res
}
