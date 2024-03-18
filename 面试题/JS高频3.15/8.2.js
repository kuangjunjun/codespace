Parent.prototype.getName = function () {
    return this.name
}

function Parent(name) {
    this.name = name
}

function Child(name) {
    Parent.call(this, name)  // this.name = 'Tom'
    this.age = 18
}

let c1 = new Child('Tom')
let c2 = new Child('Jack')

console.log(c.name);