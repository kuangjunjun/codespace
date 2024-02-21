import {track, trigger} from './effect.js'
const get = createGetter()

function createGetter() {
    return function get(target, key, receiver) {  // target 被代理的原对象, key 是原对象的健, receiver 代理对象
        const res = Reflect.get(target, key, receiver)
        // 这个属性究竟还有哪些地方用到了（副作用函数的收集）
        track(target, key)

        return res
    }
}

const set = createSetter()

function createSetter() {
    return function set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value, receiver)   //  target[key] = value;
        // 需要记录下来此时是哪一个key的值变更了，再去通知其他依赖该值的函数生效，更新浏览器的视图（响应式）
        // 触发被修改的属性身上的添加副函数 依赖触发 （被修改的key再哪些地方被用到了）
        trigger(target, key)

        return res

    }
}

export const mutableHandlers = {
  get, 
  set,
};