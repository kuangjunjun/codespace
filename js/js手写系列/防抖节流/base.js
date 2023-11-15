// function foo() {
//     console.log(arguments);  // 类数组
//     Array.from(arguments)
// }
// foo(1, 2, 3, 4)

let arr = [1, 2, 3, 4]
console.log(...arr);