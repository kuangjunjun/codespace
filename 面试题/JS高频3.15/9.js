// let a = 1

// function bar() {
//     function foo() {  // foo的词法作用域是bar  bar的词法作用域是window
//         function baz() {
//             console.log(a)
//         };
//         baz()
//     }
//     foo()
// }

// foo()

// let obj = {
//     a: 1,
//     foo: foo
// }

// let obj2 = {
//     a: 2,
//     obj: obj
// }

// function foo() {
//     console.log(this.a)
// }

// obj.foo()

// obj2.obj.foo()

// let bar = obj.foo
// bar()


let obj = {
    a: 1
}

function foo(x, y) {
    console.log(this.a)
    console.log(x + y);
}

// foo.call(obj, 1, 2)
// foo.apply(obj, [2, 3])
let bar = foo.bind(obj, 1, 2)
bar(2, 4)

