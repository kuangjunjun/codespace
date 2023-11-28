let arr = [2, 3, 1, 4, 5]


// arr.sort((x, y) => {
//     return x - y
// })
// console.log(arr);

// function bubbleSort(arr) {
//     const len = arr.length
//     for (let i = 0; i < len; i++){
//         for (let j = i + 1; j < len; j++){
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr) {
    let res = []
    
    while (arr.length) {
        let min = getMin(arr)
        res.push(min)
        arr.splice(arr.indexOf(min), 1)
    }
    return res
}

function getMin(array) {
    let min = Infinity
    for (let i = 0; i < array.length; i++){
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(bubbleSort(arr));