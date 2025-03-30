function shallowCopy(obj) {
    if (typeof obj !== 'object') {
        return 
    }
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

function deeplyCopy(obj) {
    if (typeof obj !== 'object') {
        return 
    }
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object) {
                newObj[key] = deeplyCopy(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

const obj = {
    a: 1,
    b: { x: 10, y: 20 }
  };
  
  // 使用 Object.assign() 进行浅拷贝
const ShallowCopy = deeplyCopy(obj)
  
ShallowCopy.b.x = 2;
console.log(obj.a);
