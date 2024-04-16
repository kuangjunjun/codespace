import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0  // 数据源
  list = [1, 2, 3, 4, 5, 6]
  str = 'hello'

  constructor() {
    makeAutoObservable(this) // 当类中的属性值变更，就会触发组件更新
  }

  addCount = () => {
    this.count += 1;
  }

  pushList = () => {
    this.list.push(7, 8)
  }

  get newList() {
    console.log('get new list');
    return this.list.map(item => item * 10)
  }
  
}

const counter = new CounterStore()

export default counter