class EventEmitter {
    constructor() {
        this.event = {}  // 'run': [fun]
    }
    on(type, cb) {
        if (!this.event[type]) {
            this.event[type] = [cb]
        } else {
            this.event[type].push(cb)
        }
    }
    emit(type, ...args) {
        if (!this.event[type]) {
            return
        } else {
            this.event[type].forEach(cb => {
                cb(...args)
            })
        }
    }

    off(type, cb) {
        if (!this.event[type]) {
            return
        } else {
            this.event[type] = this.event[type].filter(item => item !== cb)
        }
    }

    once(type, cb) {
        const fn = (...args) => {
            cb(...args)
            this.off(type, fn)
        }
        this.on(type, fn)
    }

}

let ev = new EventEmitter()

const fn = (str) => {
    console.log(str, 0);
}

const fn1 = (str) => {
    console.log(str, 1);
}

const fn2 = (str) => {
    console.log(str, 2);
}

// ev.on('run', fn)
// ev.emit('run', 'hello')

// ev.on('say', fn)
// ev.emit('say', 'world')

ev.on('run', fn)
ev.once('run', fn1)
// ev.on('run', fn2)
// ev.off('run', fn2)


ev.emit('run', 'hello')
ev.emit('run', 'world')