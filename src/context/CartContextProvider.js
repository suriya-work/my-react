import React, {useState , useEffect} from 'react';
//API
import { getCarts } from '../services/api';

const CartContext = React.createContext()
const CartContextProvider = ({children}) => {

    const [carts , setCarts] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCarts(await getCarts())
        }

        fetchAPI();

    },[])


    return (
       <CartContext.Provider value={carts}>

            {children}

       </CartContext.Provider>
    );
};

export default CartContextProvider;