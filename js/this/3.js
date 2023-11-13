function foo() {
    console.log(this.a);
  }

  
var obj2 = {
    a: '菌菌',
    obj: obj
}
var obj = {
  a: '来颗奇趣蛋',
  func: foo
}
obj2.obj.func()