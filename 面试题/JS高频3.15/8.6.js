class Parent {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Child extends Parent {
    constructor(name) {
        super(name);
        this.age = 18
    }
}

const c = new Child('Tome');
console.log(c.name);