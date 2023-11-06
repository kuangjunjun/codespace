var arr = [1, [2, [3, 4]]]    // [1, 2, 3, 4]

// var newArr = arr.flat(Infinity)
// console.log(newArr);

function flatten(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            var nextArr = flatten(arr[i])
            result = result.concat(nextArr)
        } else {
            result.push(arr[i])
        }
    }
    return result
}