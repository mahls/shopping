import React from 'react'
import {createContext, useState} from 'react';

const FavsContext = createContext();

export function CartProvider({children}){
  const [favs, setFavs] = useState([]);
  return (
    <FavsContext.Provider value={ {favs, setFavs}  }>
      {children}
    </FavsContext.Provider>
  )
}

export default CartContext;
