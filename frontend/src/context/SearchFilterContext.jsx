import React from 'react'
import {createContext, useState} from 'react';

const SearchFilterContext = createContext();

export function SearchFilterProvider({children}){
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchFilterContext.Provider value={ {searchTerm, setSearchTerm}  }>
      {children}
    </SearchFilterContext.Provider>
  )
}

export default SearchFilterContext;


