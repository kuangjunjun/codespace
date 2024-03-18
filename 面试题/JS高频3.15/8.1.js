function Parent() {
    this.name = 'Tom'
    this.like = [1, 2]
    this.girlfriend = {
        n: 1
    }
}

Child.prototype = new Parent()

function Child() {
    this.age = 18
}

// let child = new Child()
let child1 = new Child()
let child2 = new Child()

child1.name = 'Jerry'

// console.log(child.name);  // 'Tom'

// console.log(child1.name);
// console.log(child2.name);
child1.like.push(3)  // yes
child1.name = 'Jerry'  // No

child1.girlfriend.n = 2  // yes
child1.girlfriend = { n: 2 } // no

console.log(child1.girlfriend.n); // 2
console.log(child2.girlfriend.n); // 2

console.log(child1.like);
console.log(child2.like);

