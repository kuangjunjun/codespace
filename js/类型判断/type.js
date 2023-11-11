let str = 'hello'   //string
let num = 123      // number
let flag = false    // boolean
let und = undefined    // undefined
let nu = null // nul
let big = 123n // big number    大整形
let s = Symbol('hello')

let obj = {}
let arr = []
let fn = function () {}
let date = new Date()   //Date

// 判断类型
console.log(typeof str);  // typeof(str)    string
console.log(typeof num);  // number
console.log(typeof flag); // boolean
console.log(typeof und);  // undefined
console.log(typeof nu);   // object  bug
console.log(typeof big);  // bigint
console.log(typeof s);    // symbol

console.log(typeof obj);  // object
console.log(typeof arr);  // object
console.log(typeof fn);   // function
console.log(typeof date); // object
