function a() {
    return new Promise((reslove, reject) => {
        reslove('a')
    })
}

async function test() {
    let p = await a()
    console.log(p);
}

test()