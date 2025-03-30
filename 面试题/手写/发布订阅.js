// 手写发布订阅

class EventEmitter {
  constructor() {
    this.event = {}
  }

  on(type, cb) {
    if (this.event[type]) {
      this.event[type].push(cb)
    } else {
      this.event[type] = [cb]
    }
  }

  emit(type, ...args) {
    if (this.event[type]) {
      this.event[type].forEach(item => {
        item(...args)
      })
    } else {
      return
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
  console.log(str);
}

const fn1 = (str) => {
  console.log(str, 'test');

}

ev.on('run', fn)
ev.once('run', fn1)
// ev.off('run', fn)
ev.emit('run', 'hello')
ev.emit('run', 'hello')

// ev.on('say', fn)
// ev.emit('say', 'world')
