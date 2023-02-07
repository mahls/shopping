import React from 'react'
import {useState, useContext} from 'react'
import SearchFilterContext from '../../../context/SearchFilterContext.jsx'

const Search = () => {
  
  const searchFilterContext = useContext(SearchFilterContext);

  let handleSearch=(e)=>{
    searchFilterContext.setSearchTerm(e.target.value);
    console.log(searchFilterContext.searchTerm);
  };

  return (

    <div>
      <span className="text-white pr-4">Search</span>
      <input type="text" className="focus:border-blue-500 transition-300 ease-in-out delay-50  w-96 bg-stone-900 text-white border-2 outline-none border-stone-900 text-orange px-2" onChange={handleSearch}/>
    </div>

  )
}

export default Search
