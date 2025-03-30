function add(a, b, c) {
    return a + b + c
}

console.log(add.length);

function curry(fn) {
    let judege = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return (...arg) => judege(...args, ...arg)
        }
    }

    return judege
}

const curryAdd = curry(add)

console.log(curryAdd(1)(2)(3));


