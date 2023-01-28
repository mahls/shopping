import React from 'react'
import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import CartItem from './CartItem.jsx'

const Navigation = () => {

  const [navOpen, setnavOpen] = useState(false);

  let toggleNav = () => {
    setnavOpen(!navOpen);
    console.log(navOpen);
  }

  let toggleTheme = () => {
    console.log("theme");
  }

  return (
    <>
      
      <div className="bg-stone-900 h-10 flex justify-between items-center px-5 py-5 text-white">
        
        <div className="align-middle justify-items-center">
          <NavLink  onClick={()=>setnavOpen(false)}  to="/">LOGO</NavLink>
        </div>
        
        <div className="flex justify-between w-52">
          <NavLink to="/Products">Products</NavLink>
          <NightlightRoundIcon className="cursor-pointer" onClick={toggleTheme}/>
          <ShoppingCartIcon className="cursor-pointer" onClick={toggleNav}/>
        </div>
        
      </div>
        
      <div className={`overflow-x-hidden z-50 bg-stone-600 h-screen w-96 absolute right-0 flex flex-col transition ease-in-out delay-150 duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <CartItem/>
        
        <div className=" p-2 bg-blue-200 flex content-center justify-center items-center mt-10 ">
          <NavLink to="/checkout"  onClick={toggleNav}  className="bg-red-200 rounded w-44">checkout</NavLink> 
        </div>

      </div>

  </>
  )

}

export default Navigation;
