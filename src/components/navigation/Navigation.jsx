import React from 'react'
import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
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
      
      <div className="bg-stone-900 h-16 flex justify-between items-center px-10 py-5 text-stone-400">
        
        <div className="align-middle justify-items-center">
          <NavLink  onClick={()=>setnavOpen(false)}  to="/">LOGO</NavLink>
        </div>
        
        <div className="flex justify-between">

          <NavLink onClick={()=>setnavOpen(false)} className="pr-2" to="/">Home</NavLink>
          <NavLink onClick={()=>setnavOpen(false)} className="pr-2" to="/checkout">Checkout</NavLink>
          <NavLink onClick={()=>setnavOpen(false)} className="pr-2" to="/contact">Support</NavLink>  
          <NavLink onClick={()=>setnavOpen(false)} className="pr-2" to="/products">Products</NavLink>
          <NightlightRoundIcon className="cursor-pointer" onClick={toggleTheme}/>
          <ShoppingCartIcon className="cursor-pointer ml-2"  onClick={toggleNav}/>
        </div>
        
      </div>
        
      <div className={` z-50 bg-stone-700 h-screen w-96 absolute right-0 flex flex-col transition ease-in-out delay-50 duration-100 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <CartItem/>
        
        <div className=" p-2 bg-blue-200 flex content-center justify-center items-center mt-10 ">
          <NavLink to="/checkout"  onClick={toggleNav}  className="bg-red-200 rounded w-44">checkout</NavLink> 
        </div>

      </div>

  </>
  )

}

export default Navigation;
