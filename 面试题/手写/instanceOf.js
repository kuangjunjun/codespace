function instancOF(L, R) {
    let left = L.__proto__
    let right = R.prototype
    while (left !== null) {
        if (left !== right) {
            left = left.__proto__
        } else {
            return true
        }
    }
    return false
}

console.log(instancOF([], Array));  // true
console.log(instancOF([], Object) ); // true