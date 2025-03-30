let arr = [15, 12, 3, 2, 7]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let index = Math.floor(arr.length / 2)
    let pivot = arr.splice(index, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr));
