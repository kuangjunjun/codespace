function bar() {
    console.log(myName);
}

function foo() {
    var myName = '龙龙'
    bar()
}

var myName = '菌菌'
foo()