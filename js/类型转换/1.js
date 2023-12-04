let num = 123
let str = 'hello world'
let flag = true
let un = undefined
let n = null


// let big = 123n
// let sy = Symbol(123)

console.log(Boolean(false));   // false
console.log(Boolean(1));    // true
console.log(Boolean(+0));   // false
console.log(Boolean(-0));   // false
console.log(Boolean(-1));  // true
console.log((Boolean(undefined)));  // false
console.log(Boolean(null)); //false
console.log(Boolean('123')); // true
console.log(Boolean(''));    // false
console.log(Boolean(' '));   // true



console.log(Number());    // 0
console.log(Number('123')); // 123
console.log(Number('hello')); // NaN   一种值，无法表示的一种值，属于number
console.log(Number(undefined)); // NaN
console.log(Number(null));  // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('00123.123')); // 123.123


console.log(String());  // 空字符串
console.log(String(123)); // 123
console.log((String(0)));  // 0
console.log(String(NaN));  // NaN
console.log(String(Infinity));  // Infinity
console.log(String(true));   // true
console.log(String(undefined)); // undefined
console.log(String(null));  // null


console.log(Object(123)); // Number {123}








