import React from 'react'
import {createContext, useState} from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}){
  const [dark, setdark] = useState(false);
  return (
    <ThemeContext.Provider value={ {theme: {dark}, setdark: {setdark} }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
