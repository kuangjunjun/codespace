// 浅拷贝
const obj = {
  a: 1,
  b: {
    c: 2
  }
};

function shallowCopy(obj) {
  if (typeof obj !== 'object') {
    throw new Error('us not a object')
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
    throw new Error('is not a object')
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

let newObj = shallowCopy(obj)
let newDeeplyObj = deeplyCopy(obj)
obj.a = 2
obj.b.c = 99
console.log(newObj.a, newObj.b.c);
console.log(newDeeplyObj.a, newDeeplyObj.b.c);

