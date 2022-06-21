import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const AddTransaction = () => {
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const { addTranstion } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: + amount
        }
        addTranstion(newTransction);

    }

    return (
        <div>
            <h3>Add New Transation</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder='Enter amount...' />
                </div>
                <button>Add Transation</button>
            </form>
            
        </div>
    );
};

export default AddTransaction;