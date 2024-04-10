import React from 'react';
import ContextChild from './ContextChild';
import Con from '../_context';
import { useContext } from 'react';

const Context = () => {
    const msg = useContext(Con)
    return (
        <div>
            <h3>context --- {msg}</h3>
            <ContextChild />
        </div>
    );
};

export default Context;