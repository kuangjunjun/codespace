function foo() {
    let a = 1
    let b = 2
    let c = 3

    // return function bar() {
    //     console.log(a, b);
    // }

    global.bar = function () {
        console.log(a, b);
        a = null
        b = null
    }
    
}

let bar = foo()
bar()