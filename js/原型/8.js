Person.prototype.name =  '来颗奇趣蛋'
    function Person(){
        // var this = {
        //     _proto_: Person.prototype
        // }
    }
    var p = new Person()
    console.log(p.name);