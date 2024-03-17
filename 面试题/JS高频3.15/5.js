// let a = 1
// let b = a
// a = 2

// let a = {
//     age: 18
// }
// let b = a
// a.age = 20

// console.log(b);

// let a = {
//     age: 18,
//     like: [1, 2]
// }

// let b = Object.assign({}, a)
// a.like.push(3)

// console.log(b);

// let a = [1, 2, { n: 3 }]
// let b = [...a]
// let b = [].concat(a)
// let b = a.slice(0)

// a[2].n = 30
// console.log(b);


// let a = [1, 2, { n: 3 }]
// let a = {
//     n: 1,
//     // m: Symbol(2),
//     // o: function () { },
//     g: undefined,
//     p: null,
//     k: {
//         e: 3
//     },
//     j: 123n
// }

// a.f = a.k
// a.k.e = a.f

// let b = JSON.parse(JSON.stringify(a))

// a[2].n = 30
// console.log(b);

// let b = structuredClone(a)
// console.log(b);

let fn = function () {
    console.log('hello world');
}

function copy(fn) {
    let foo = fn.toString()
    
    return new Function(`return ${foo}`).call(fn)
}

let foo = copy(fn)
foo()