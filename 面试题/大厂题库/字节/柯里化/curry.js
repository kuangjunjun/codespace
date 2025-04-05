function sum(...args){
    let _args = args
    return function(){
        if(arguments.length === 0){  // 最后一次调用
            _args.reduce((pre, item) => {
                return pre + item
            }, 0)
        }else{
            _args = [..._args, ...arguments]
            return sum(..._args)
        }
    }
}

sum(1, 2)() // 3
sum(1, 2, 3)(3, 5)() // 15
sum(1, 2, 3)(3, 5)(1, 2)()