let arr = ['a', 'b', 'c']

// for (var i = 0; i < arr.length; i++){

// }

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let item of arr) {
    console.log(item);
}

for (let item of obj) {
    console.log(item);      // 报错，传统对象不具有迭代器属性   obj is not iterable
}