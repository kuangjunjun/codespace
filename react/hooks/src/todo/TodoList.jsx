import React from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';

// 父组件
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" />
        <Button>提交</Button>
      </header>

      <section>
        <TotoItem data={data}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;