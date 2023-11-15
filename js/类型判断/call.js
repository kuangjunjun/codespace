var obj = {
    a: 1,
    //foo: foo
}
function foo(x, y) {
    console.log(this.a, x + y);
    
}
// foo.call(obj)

Function.prototype.myCall = function (context) {
    if (!this instanceof Function) {
        throw new TypeError('myCall is not a function')
    }
    let args = Array.from(arguments).slice(1)  // [...arguments].slice(1) 
    context.fn = this
    context.fn(...args)
    delete context.fn
}

foo.myCall(object)

// {
//     fn: foo
// }
// obj.fn()
// delete obj.fn




// obj.foo()