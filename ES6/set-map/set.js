// let arr = [1, 1, 2, 3, 3]
// let obj = {
//     a: 1,
//     b: 1,
//     c: 1
// }

// let set = new Set([1, 2, 3, 4])


// console.log(set);   // Set(4) { 1, 2, 3, 4 }

// set.add(5)

// console.log(set.size);  //5

// let set = new Set([1, 1, 2, 3, 4])
// set.add(5)
// console.log(set)  // Set(5) { 1, 2, 3, 4, 5 }



// function unique(arr) {
//     // return  Array.from(new Set(arr))
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]

// console.log(unique(arr));


let set = new Set([1, 1, 2, 2, 3, 4])


// console.log(set.has(1));

for (let item of set.values()) {  // set.values()  || set.keys() 具有迭代器属性
    console.log(item);
}