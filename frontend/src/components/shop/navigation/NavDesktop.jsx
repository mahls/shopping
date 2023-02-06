import React from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import SearchBar from '../searchFilter/SearchBar.jsx'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const NavDesktop = ({toggleNav, setnavOpen}) => {
 
  let activeClass = "text-stone-200 pr-4 pl-4"
  let unactiveClass = "text-stone-400 pr-4 pl-4"
  let activeHome = "text-stone-200, setnavOpen"
  let unactiveHome = "text-ston-400"

  return (
    <div>
      <div className="bg-black h-16 text-xl flex justify-between items-center px-16 py-10 text-stone-200 border-b-2 border-stone-500">
        <div className="align-middle justify-items-center mr-4">
          <NavLink onClick={()=>setnavOpen(false)} to="/"><p className="font-bold text-2xl text-white">LOGO</p></NavLink>
        </div>
        <div className="flex">
          <SearchBar/>
        </div>    
        <div className="flex justify-between">
          <NavLink onClick={()=>setnavOpen(false)} to="/" className={({ isActive }) => isActive ? activeClass : unactiveClass}>
            HOME
          </NavLink>
          <NavLink onClick={()=>setnavOpen(false)} to="/checkout" className={({ isActive }) => isActive ? activeClass : unactiveClass}>
            CHECKOUT
          </NavLink>
          <NavLink onClick={()=>setnavOpen(false)} to="/contact" on className={({ isActive }) => isActive ? activeClass : unactiveClass} >
            SUPPORT <KeyboardArrowDownIcon/>
          </NavLink>  
          <NavLink onClick={()=>setnavOpen(false)} to="/products" className={({ isActive }) => isActive ? activeClass : unactiveClass}>
            PRODUCTS
          </NavLink>
          <NightlightRoundIcon className="cursor-pointer ml-4"/>
          <FavoriteBorderIcon className="cursor-pointer ml-4" />
          <LocalMallIcon className="cursor-pointer ml-4" onClick={toggleNav}/>
        </div>
      </div>
    </div>
  )
}
export default NavDesktop
