// 浅拷贝的实现原理

let obj = {
    name: '来颗奇趣蛋',
    age: 18,
    like: {
        type: 'coding'
    }
}
let arr = ['a', {'n':1}, 1, undefined, null]

function shalldowCopy(obj) {
    // let objCopy = {}
    // if (obj instanceof Array) {
    //     objCopy = []
    // }

    if (typeof obj !== 'object' || obj == null) return 
    let objCopy = obj instanceof Array ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

let newObj = shalldowCopy(obj)
obj.like.type = 'swimming'
console.log(newObj);