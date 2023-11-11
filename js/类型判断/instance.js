let str = 'hello'   //string
let num = 123      // number
let flag = false    // boolean
let und = undefined    // undefined
let nu = null // nul
let big = 123n // big number    大整形      bigint
let s = Symbol('hello')

let obj = {}
let arr = []
let fn = function () {}
let date = new Date()   //Date

console.log(obj instanceof Object);     // true
console.log(arr instanceof Array);      // true   console.log(arr instanceof Object)  // true
console.log(fn instanceof Function);    // true
console.log(date instanceof Date);      // true

// console.log(str instanceof String);     // false     只能判断引用数据类型

function test(obj) {
    if (obj instanceof Object) {
        return obj.name
    }
}
// test({name:'君君'})
test(['君君'])