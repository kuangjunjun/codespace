let obj = {
    name: 'Tom',
    age: 18,
    like: [1, 2, 3]
}

let obj2 = Object.create(obj)
obj2.like.push(4)

let obj3 = Object.create(obj)

console.log(obj2.like);
