import React from 'react';
import List from './components/List';
import Page from './components/Page';
import Life from './components/Life'
import TodoList from './todoList/TodoList';

const App = props => {
  const colors = [
    {id: 1, name: '红色'},
    {id: 2, name: '蓝色'},
    {id: 3, name: '黄色'}
  ]

  return (
    <div>
      <h2>Hello React</h2>

      {/* <List colors={colors} fn={() => { }} obj={{ name: 'Tom' }} /> */}
      {/* <Page /> */}

      {/* <Life></Life> */}

      <TodoList />

    </div>
  );
};

export default App;