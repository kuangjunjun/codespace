// let a = { name: '俊熙' }
// let b = Object.create(a)    b为空对象   原型隐式继承a
// a.name = '军儿'

// console.log(b.name);   军儿    浅拷贝

// let a = {
//     name: '俊熙',
//     like: {
//         n: 'coding'
//     }
// }
// let b = Object.assign({}, a)
// a.like.n = 'running'

// console.log(b);

let arr = [1, 2, 3, {a: 10}]
// let newArr = [].concat(arr)
// let newArr = arr.slice()
// let newArr = [...arr]
// let newArr = arr.toReversed().reverse()
arr[3].a = 100
console.log(newArr);