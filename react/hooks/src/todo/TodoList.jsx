import React from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';
import { useState } from 'react';

// 父组件
const TodoList = () => {
  const [data, setData] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ])

  const [item, setItem] = useState('js')

  const changeHandler = (e) => {
    console.log(e.target.value);
    setItem(e.target.value)
  }

  const toSubmit = () => {
    let arr = [...data]  // let arr = data   arr.push()  // 已经将newData修改了，但是不触发组件更新
    arr.push(item)
    setData(arr)
    // console.log(data);
  }

  const handelerDel = (index) => {
    let arr = [...data]
    arr.splice(index, 1)
    setData(arr)
  }
  
  
  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" value={item} onChange={changeHandler} />
        <Button onClick={toSubmit}>提交</Button>
      </header>

      <section>
        <TotoItem data={data} cb={handelerDel}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;