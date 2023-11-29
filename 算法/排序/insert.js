let arr = [5, 3, 2, 4, 1]

function insertSort() {
    const len = arr.length
    let temp
    for (let i = 1; i < len; i++){
        temp = arr[i]
        let j = i 
        while ( j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}