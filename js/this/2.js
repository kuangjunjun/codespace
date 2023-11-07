// var a = 1
// function foo() {
//   console.log(this.a);
// }
// foo()

var b = 2
function foo() {  // [[scope]]
  var b = 1

  function bar() {
    baz()
  }
  function baz() {
    console.log(this.b);
  }
  bar()
}

foo()