const obj1 = { a: 1 }
const obj2 = { b: 2 }

console.log(obj1 == obj2);  // false   值相等 但指针不等(引用地址不同)
console.log(obj1 === obj2);  // false    三个等号判断值和类型是否都等

// 1. 引用类型的值怎么看