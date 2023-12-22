function add(a, b, c) {
    return a + b + c
}

function curry(fn) {
    // 收集参数 闭包 arr
    // 到位了 就运行  arr.length === fn.length   fn(...arr)
    // 返回收集参数的函数
    // rest 运算符  args是数组 闭包空间  自由变量
    let judge = (...args) => {
        if (args.length === fn.length) {
            return fn(...args)  // 退出条件
        }
        // 返回参数， 继续收集参数
        return (...arg) => judge(...args, ...arg)
    }
    return judge
}
// 有时候不会一次性给到, 前端的交互
// js curry 柯里化
// 每次接受一个参数

console.log(add.length);
// add(1)(2)(3)
const curryAdd = curry(add)
curryAdd(1)(2)(3)