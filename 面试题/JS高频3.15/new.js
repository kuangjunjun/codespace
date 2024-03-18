function Car(name) {
    this.name = name
    // return []
}

function myNew(...args) {
    let obj = {}
    obj.__proto__ = args[0].prototype
    const res = args[0].call(obj, ...args.slice(1))
    return res instanceof Object ? res : obj
}

// let car = myNew(Car, 'BMW', 1, 2)
// console.log(car);

let car = new Car('BYD')


