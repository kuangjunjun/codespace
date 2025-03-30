// 1、补充以下SuperTask类
class SuperTask {
    constructor(num) {
        this.num = num
        this.stack = []
        this.runningCount = 0
    }

    add(task) {
        return new Promise((reslove, reject) => {
            this.stack.push({task, reslove, reject})
            this.run()
        })
    }

    run() {
        if (this.runningCount < this.num && this.stack.length > 0) {
            const { task, reslove, reject } = this.stack.shift()
            this.runningCount++
            task().then(
                () => reslove()
            ).catch(
                () => reject()
            ).finally(
                () => {
                    this.runningCount--
                    this.run()
                }
            )
       }
    }
}

function timeout(time) {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve()
        }, time)
    )
}

const superTask = new SuperTask(3);
function addTask(time, name) {
    superTask
        .add(() => timeout(time))
        .then(() => {
            console.log(`任务${ name }完成`);
        });
}
addTask(10000, 1);  //10000ms后输出:任务1完成
addTask(5000, 2);    //5000ms后输出:任务2完成
addTask(3000, 3);    //8000ms后输出:任务3完成
addTask(4000, 4);    //12000ms后输出:任务4完成
addTask(5000, 5);    //15000ms后输出:任务5完成

