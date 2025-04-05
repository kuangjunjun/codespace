function add(a, b, c){
    return a + b + c
}

// add(1, 2)

// let addCurry = curry(add)
// addCurry(1)(2) // 3

function curry(fn, ...args){
    let length = fn.length
    // args = args || []

    return function(){
        let _args = args.slice(0), arg  // _args 是 curry帮接受的参数

        for(let i = 0; i < arguments.length; i++){  // 返回的function 帮接受了多少个参数
            arg = arguments[i]
            _args.push(arg)
        }

        // curry 接受的参数个数 + 第一层返回的function 接受的参数个数 < 原函数接受的参数个数
        if(_args.length < length){
            return curry(fn, ..._args)
        }else{
            return fn(..._args)
        }
    }
}

const res = curry(add)
console.log(res(1)(2)(3)); // 6

console.log(res(1)(2, 3)); // 6
console.log(res(1, 2)(3)); // 6
console.log(res(1, 2 ,3)) // 6