let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    },
    a: undefined,
    b: null,
    c: function () { },
    d: {
        n: 100
    },
    e: Symbol('hello')

}

obj.c = obj.d
obj.d.m = obj.c

let newObj = JSON.parse(JSON.stringify(obj))
obj.like.type = 'eating'
console.log(newObj);