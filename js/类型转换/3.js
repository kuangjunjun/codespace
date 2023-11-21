// 一元运算符
// + '1' // Number(1)
+[]    // 0
+ {}   // NaN
+ [1, 2, 3]  // NaN



// 二元运算符
console.log(1 + '1');  // '11'
console.log(1 + null);  // 1
console.log([] + []);  // ""
console.log([] + {});  // [object Object]