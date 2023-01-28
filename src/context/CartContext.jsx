import React from 'react'
import {createContext} from 'react';

const ShopCartContext = createContext(null);

let cartItems = [{item:"fishing", item:"dancing"}];

const CartContext = ({children}) => {
  return (
    <ShopCartContext.Provider value={cartItems}>
      {children}
    </ShopCartContext.Provider>
  )
}

export default CartContext
