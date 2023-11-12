// let a = 1
// if (true) {
//     console.log(a); // 暂时性死区
//     let a = 2
// }

// var a = 2
// console.log(window.a);


const obj = {
    name: '军儿'
}
obj.name = '程总'

console.log(obj);