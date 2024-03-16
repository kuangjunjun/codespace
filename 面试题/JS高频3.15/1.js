let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// let s = arr.splice(1, 3, 'hello')  返回切割结果， 原数组在切割位置添加元素,切割影响原数组
// console.log(s, arr);
// let arr2 = [1, 2, 3]

// let s = arr.concat(arr2)   concat 返回一个新数组
// console.log(s);
// let s = slice(0, 2)   不影响原数组， 切割，包括第一个参数不包括第二个， 返回原数组的一部分

// console.log(arr.indexOf('c'));  // 2
// console.log(arr.lastIndexOf('c'));   // 2

let arr3 = [1, 2, 3, 4, 5, 6]
// let s = arr3.find((item, i, arr) => {
//     return item > 4
// })
// console.log(s);

// let arr2 = arr.map((item, i, arr) => {
//     if (item < 3) {
//         return item  1 2 ud ud ud ud
//     }
// })

// let arr2 = []
// arr.forEach((item, i, arr) => {
//     if (item < 4) {
//         arr2.push(item)  1 2 3
//     }
// })

// arr.forEach((item, i, arr) => {
//     if (item > 4) {
//         return
//     }
//     arr2.push(item)  // 1 2 3 4
// })

// arr.forEach((item, i, arr) => {
//     if (i === 3) {
//         return
//     }
//     console.log(i);
// })

// let arr2 = arr.filter((item, i, arr) => {
//     return item > 3
// })

// let s = arr.every((item, i, arr) => {
//     return item > 3   // false
// })

// let res = arr.some((item, i, arr) => {
//     return item > 3  // true
// })

// console.log(s);

let arr2 = arr3.reduce((pre, item, i, arr) => {  // pre = reduce()
    console.log(pre);  // 0 ud ud ud ud ud
    return pre + item
}, 0)  

console.log(arr2);
