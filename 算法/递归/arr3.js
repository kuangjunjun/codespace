

// var arr = [1, 2, 3, 4, 5, 6, 7]

// arr.reduce(function (pre, item, index, arr) {
//     return pre + item
// },
// 0
// )






var arr = [1, [2, [3, 4]]]
function flaten(arr) {
    return arr.reduce(function (performance, item) {
        return pre.concat(Array.isArray(item) ? flaten(item) : item)
    },[])
}
console.log(flaten(arr));