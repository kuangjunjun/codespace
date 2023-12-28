class EventEmitter {
    constructor() {
        this.event = {} // 'run': [fun]
    }
    on(type, cb) {
        if (!this.event[type]) {
            this.event[type] = [cb]
        } else {
            this.event[type].push(cb)
        }
    }
    once(type, cb) {
        const fn = (...args) => {
            cb()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, ...args) {
        if (!this.event[type]) {
            return 
        } else {
            this.event[type].forEach(cb => {
                cb(...args)
            });
        }
    }
    off(type, cb) {
        if (!this.event[type]) {
            return
        } else {
            this.event[type] = this.event[type].filter(item => item != cb)
        }
    }
}

let ev = new EventEmitter()

const fn = (a, b) => {
    console.log(a, b);
}

ev.on('run', fn1)

ev.once('run', fn2)

ev.on('run', fn3)
ev.off('run', fn3)

ev.emit('run', 123)

ev.on('say', fn)
ev.emit('say', 'hello')