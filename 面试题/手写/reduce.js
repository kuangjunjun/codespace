Array.prototype.Myreduce = function (callback, initialValue) {
    let arr = this
    if (!Array.isArray(arr)) {
        throw new TypeError('reduce of null or undefined')
    }

    let accumulator = initialValue
    let startIndex = 0

    if (initialValue === undefined) {
        if (arr.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value')
        }
        accumulator = arr[0]
        startIndex = 1
    }

    for (let i = startIndex; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr)
    }

    return accumulator
}

let arr = [1, 2, 3, 4]
console.log(arr.reduce((acc, cur) => acc + cur, 0));
console.log(arr.Myreduce((acc, cur) => acc * cur, 1 ));

