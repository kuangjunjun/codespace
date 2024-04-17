let a = 'abas'

// const validPaliond = (s) => {
//     const arr = s.split('')

//     if (helper(arr)) {
//         return true
//     } else {
//         for (let i = 0; i < arr.length; i++){
//             const newArr = [...arr]
//             newArr.splice(i, 1)
//             if (helper(newArr)) {
//                 return true
//             }
//         }
//         return false
//     }
// }

const validPaliond = (s) => {
    let l = 0; r = s.length - 1

    while (l < r) {
        if (s[l] !== s[r]) {
            return helper(s, l + 1, r) || helper(s, l, r - 1)
        }
        l++
        r--
    }
}

// const helper = (arr) => {
//     return arr.join('') === arr.reverse().join('')
// }

const helper = (s, i, j) => {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(validPaliond(a));