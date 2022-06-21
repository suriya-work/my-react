import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const Transtion = ({transaction}) => {
    const { deletTranstion } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ?'-' : '+';
    return (
        
        <li>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deletTranstion(transaction.id) }>+</button>
        </li>
    
    );
};

export default Transtion;