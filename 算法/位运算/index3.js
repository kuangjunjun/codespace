// const num1 = 5 // 101
// const num2 = 3 // 011

// const res = num1 ^ num2 // 110

// console.log(res); // 6

let num1 = 5   // 101
let num2 = 7   // 111
    
// [num1, num2] = [num2, num1]

function swap(a, b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a, b]
}

[num1, num2] = swap(num1, num2)
console.log(num1, num2); // 7, 5


// 4, 9
// 100  1001   1101
// (a ^ b) ^ b == a
