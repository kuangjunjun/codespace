Function.prototype.myCall = function (context, ...args) {
    if (!this instanceof Function) {
        throw new TypeError('myCall is not a function')
    }
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

var obj = {
    a: 1,
}
function foo(x, y) {
    console.log(this.a);
}    

foo.myCall(obj)

