// function Car(name,color,size) {
//     this.name = name
//     this.color = color
//     this.size = size

//     // let this = {
//     //     name: name,
//     //     color: color
//     //     size: size
//     // }
//     // return this
// }

// let car =  new Car('BMW', 'red', 'short')
// console.log(car);

// var obj = {}
// obj.a = 123
// console.log(obj.a);
// console.log(obj.b);

// var num = 123
// // var num = new Number(123)
// num.abc = 'hello'
// // num.abc = 'hello'
// // delete num.abc

// // new Number(123).abc
// console.log(num.abc);   // 输出undefined

// var num = 4
// num.len = 3

// // var num = new Number(4)
// // num.len = 3
// // delete num.len

// // new Number(4).len   //隐式包装类
//  console.log(num.len);

// 考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);

var str = 'abcd'
//new String('abcd').length
console.log(str.length);
