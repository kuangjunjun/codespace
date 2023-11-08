// Person.prototype   原型

Person.prototype.say = function () {
    return 'hello'
}

function Person() {
    this.name = '来颗奇趣蛋'
    this.age = 18
    }


let p = new Person()

console.log(p.say());

console.log(p);
