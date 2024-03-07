function a() {
    setTimeout(() => {
        console.log('a 完成');
    }, 1000);
}

function a() {
    setTimeout(() => {
        console.log('b 完成');
    }, 500);
}

function run(fn) {
    let gen = fn()

    function next(err, data) {
        let result = gen.next(data)
        if (result.done) return
        result.value(next)
    }

    next()
}
run(g)

function* g() {
    yield a()
    yield b()
}

