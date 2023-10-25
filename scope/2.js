function foo(str, a) {
    eval(str)  // var b = 3

    console.log(a, b);
}

foo('var b = 3', 1)