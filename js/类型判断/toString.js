// console.log(
//     Object.prototype.toString.call('hello')  // [object String]
// );

let s = 'hello'

// if (Object.prototype.call(s) === '[object String]') {
    
// }

function isType(s) {
    return Object.prototype.toString.call(s).slice(8, -1)
}

if (isType(s) === 'string') {
    
}