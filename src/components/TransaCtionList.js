import React, { useContext } from 'react';
import Transtion from './Transtion';
import { GlobalContext } from '../context/GlobalContext';

const TransaCtionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul>
                {
                    transactions.map(transaction => (<Transtion key={transaction.id} transaction={transaction} />))
                }
               
            </ul>
        </div>
    );
};

export default TransaCtionList;