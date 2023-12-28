// class Point{
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     toString() {
//         return `(${this.x}, ${this.y})`
//     }
//     static foo() {  // 静态方法
//         return 'foo'
//     }
// }



class Point{
    _count = 0

    get value() {
        return this._count
    }

    set value(val) {
        console.log(val, '-----');
        this._count = val
    }
}

let p = new Point()
console.log(p.value);
p.value = 1