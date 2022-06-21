import React, { createContext, useContext , useReducer } from 'react';
import AppReducer from "./AppReducer"

const initialState = {
    transactions: [

        { id: 1 , text:"flower", amount: -20},
        { id: 2 , text:"salary", amount: 300},
        { id: 3 , text:"Book", amount: -10},
        { id: 4 , text:"Camera", amount: 150}
    ]  
}

export const  GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);

    //Action

    const deletTranstion = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload : id
        })

    }

    
    const addTranstion = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction
        })

    }





     return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deletTranstion,
            addTranstion
        }}>
            {children}
        </GlobalContext.Provider>
     )

}

// const GlobalContext = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default GlobalContext;