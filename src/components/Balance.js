import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const totla = amounts.reduce((acc , item) =>  (acc += item),0).toFixed(2)

    return (
        <div>
            <h4>your Balance</h4>
            <h1>${totla}</h1>
        </div>
    );
};

export default Balance;