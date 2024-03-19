let obj = {
    a: 1,
    b: undefined,
    c: {
        n: 2
    }
}

Object.defineProperties(obj, 'd', {
    enumerator: false,
    value: 3,
    writable: true,
    configurable: true
})
// console.log(obj.d);
// console.log(Obj.keys(obj));

function hasProper(obj, key) {
    // return obj[key] !== undefined   值为undefined的属性就判断不了
    // return Object.keys(obj).includes(key)  //属性为不可枚举时，判断不了
    // return obj.hasOwnProperty(key)  只能判断显示属性

    return key in obj
}

hasProper(obj, 'd')  // true