function Bus() {
    
}

function Car() {
    
}
Car.prototype = {
    constructor: Bus
}

var car = new Car()
console.log(car.constructor);

//constructor 记录对象是由谁创建的