let obj = {
    a: 1,
    b: {
        n: 2
    }
}

function deepCopy(obj) {
    return new Promise((reslove, reject) => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(obj)

        port2.onmessage = (msg) => {
            reslove(msg.data)
        }
    })
}

async function fn() {    
    let newObj = await deepCopy(obj)
    console.log(newObj);
}

fn()