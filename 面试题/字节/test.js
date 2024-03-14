let obj = {
    a: 1,
    b: 2
}

let n = obj.a
Object.defineProperties(obj, 'a', {   // 数据劫持
    get() {
        return n
    },
    set(newval) {
        n = newval
    },
    enumerator: false,  // 是否可枚举
    writable: false,   // 是否可写
    value: 100,      // 默认值
    configurable: false  // 是否可配置（删除）
})

delete obj.a
obj.a = 10
console.log(obj.a);

// for(let key in obj) {
//     console.log(key)
// }