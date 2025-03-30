// forEach

// 手写 forEach、Map
let obj = {
    a: 1
}

// Array.prototype.myforEach = function (fn, _this) {
//     let arr = this
//     for (let i = 0; i < arr.length; i++) {
//         fn.call(_this, arr[i], i, arr)
//     }
// }

let arr = [1, 2, 3]
// arr.myforEach(function () {
//     console.log(this.a);

// })

// 手写Map
Array.prototype.mymap = function (fn, _this) {
    let arr = this
    let result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = fn.call(_this, arr[i], i, arr)
    }
    return result
}

let newArr = arr.map(function (item) {
    return item + this.a
}, obj)
console.log(newArr);


