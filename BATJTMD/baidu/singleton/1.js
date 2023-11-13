// es6  class 类
// 类是一个抽象的概念， 
class SingleDog{
    show() {
        console.log("我是一个单例对象");
    }
}

const s1 = new SingleDog()
const s2 = new SingleDog()

console.log(s1 === s2);// false  不同的内存空间，值 也会不一定