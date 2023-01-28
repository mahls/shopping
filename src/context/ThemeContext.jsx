import React from 'react'
import {createContext} from 'react';

const ThemeTypeContext = createContext(null);

let theme = false;

const ThemeContext = ({children}) => {
  return (
    <ThemeTypeContext.Provider value={theme}>
      {children}
    </ThemeTypeContext.Provider>
  )
}

export default ThemeContext
