import React from 'react'
import {createContext, useState} from 'react';

const CartContext = createContext();

export function CartProvider({children}){
  const [cart, setcart] = useState([]);
  return (
    <CartContext.Provider value={ {cart: {cart}, setcart: {setcart} } }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;




