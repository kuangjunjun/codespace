import React from 'react';
import counterStore from '../../store/counterStore';
import { observer } from 'mobx-react-lite';

const Count = () => {
    return (
        <div>
            {/* <button onClick={() => counterStore.addCount()}>{counterStore.count}</button>
            <ul>
                {
                    counterStore.newList.map(item => <li key={item}>{item}</li>)
                }
            </ul> */}
            
            {JSON.stringify(counterStore.list)}
            <br />
            <button onClick={() => counterStore.pushList()}>push</button>
        </div>
    );
};

export default observer(Count)  // observe 实时监听Count组件