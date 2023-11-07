// console.log(this);

// var a = 1
// console.log(window.a);

function identify() {
    return this.name.toUpperCase()
  }
  
  function speek() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
  }
  var me = {
    name: "Tom"
  }
  var you = {
    name: "Jerry"
  }
  // console.log(identify(you));
  speek.call(me)
  