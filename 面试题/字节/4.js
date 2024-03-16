Object.prototype[Symbol.iterator] = function () {
    return Object.values(this)[Symbol.iterator]()
}


var [a, b] = { a: 1, b: 2 }
console.log(a, b);


// iterable
// {
//     [Symbol.iterator]: function() {
//         return 迭代器(可通过next()调用就可以读取到值的对象)
//     }
// }

function* foo() {
    yield 1
    yield 2
    yield 3
}

let gen = foo() // {} 迭代器