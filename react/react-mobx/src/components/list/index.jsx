import React from 'react';
import counterStore from '../../store/counterStore';
import { observer } from 'mobx-react-lite';

const List = () => {
    return (
        <div>
            {JSON.stringify(counterStore.str)}
        </div>
    );
};

export default observer(List);