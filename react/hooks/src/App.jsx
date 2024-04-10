import Context from './components/Context';
import Con from './_context';
import { Button } from 'antd'
import TodoList from './todo/TodoList';

// const Con = createContext()

const App = () => {
  return (
    // <Con.Provider value={'来自App中的数据'}>
    //   <div>
    //     <Context />
    //     <Button type='primary'></Button>
    //   </div>
    // </Con.Provider>
    <TodoList />
  );
};

export default App;