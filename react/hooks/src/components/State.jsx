import React, {useState} from 'react';

const State = () => {
    let [count, setCount] = useState(10)  // [xx, xxfn]
    const [title, setTitle] = useState('hello')
    

    const add = () => {
        setCount(count + 1)  // count = count + 1
        setTitle(title+count)
    }

    console.log(123);

    return (
        <div>
            <h4>titile: {title}</h4>
            <button onClick={() => add()}>{count}</button>
            {/* <h3>{flag}</h3> */}
        </div>
    );
};

export default State;