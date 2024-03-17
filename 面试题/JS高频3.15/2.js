// let s = 'abc'
// let h = '123'
// let g = s.concat(h)

// console.log(g, s, h);

// s = s.padStart(5, '0')  // padEnd

// console.log(s);

// let s = 'abcdefg'
// console.log(s.substr(3));
// console.log(s.substr(3, 2));  //和splice一样,但不影响原数组
// console.log(s.substring(3, 5));  左闭右开 切割两个参数之间  slice

// let arr = ['a', 'b', 'c', 'd', 'e']

// console.log(arr.splice(-2, 3));  // ['d', 'e']

// let s = 'acbcdecfgc'    代替
// let s2 = s.replace(/c/g, '0')

// console.log(s2);

// let s = 'abc'
// let s2 = s.repeat(3)   重复多少遍
// console.log(s2);

// let s = '    abc    '
// let s2 = s.trim()    // 去除字符串首位空格
// console.log(s);
// console.log(s2);

let s = 'abc'
console.log(s.startsWith('a'));  // true    查找是否用 开头
console.log(s.endsWith('c'));   // true  结尾



