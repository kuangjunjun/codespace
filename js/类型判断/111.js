var obj = {
    a: 1,
}
function foo(x, y) {
    console.log(this.a);
}    

Function.prototype.myCall = function (context) {
    if (!this instanceof Function) {
        throw new TypeError('myCall is not a function')
    }
    context.fn = this
    context.fn()
    delete context.fn
}

foo.myCall(obj)