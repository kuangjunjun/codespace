function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("done");
            resolve();
        }, ms * 1000);
    });
}

const pool = [() => wait(2), () => wait(2), () => wait(2), () => wait(2), () => wait(2)];

function concurrency(pool, limit) { 
    
}