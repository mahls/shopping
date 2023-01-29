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

  let activeClass = "text-stone-200 pr-2 pl-2"
  let unactiveClass = "text-stone-400 pr-2 pl-2"
  let activeHome = "text-stone-200"
  let unactiveHome = "text-ston-400"

  return (
    <>
      
      <div className="bg-stone-800 h-16 flex justify-between items-center px-10 py-5 text-stone-400 border-b-2 border-blue-400">
        
        <div className="align-middle justify-items-center">
          <NavLink onClick={()=>setnavOpen(false)} to="/"><p className="font-bold text-white">LOGO</p></NavLink>
        </div>
        
        <div className="flex justify-between">

          <NavLink 
            onClick={()=>setnavOpen(false)} to="/"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            Home
          </NavLink>
          
          <NavLink onClick={()=>setnavOpen(false)} to="/checkout"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            Checkout
          </NavLink>
          
          <NavLink onClick={()=>setnavOpen(false)} to="/contact"
            className={({ isActive }) => isActive ? activeClass : unactiveClass} 
          >
            Support
          </NavLink>  
          
          <NavLink onClick={()=>setnavOpen(false)} to="/products"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            Products
          </NavLink>
          
          <NightlightRoundIcon className="cursor-pointer" onClick={toggleTheme}/>
          <ShoppingCartIcon className="cursor-pointer ml-2"  onClick={toggleNav}/>

        </div>
        
      </div>
        
      <div className={` z-50 bg-stone-700 h-screen z-50 w-96 absolute right-0 flex flex-col transition ease-in-out delay-50 duration-100 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="overflow-y-scroll">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
              
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
        {/* loop through cart items here after importing cart context */} 


        
        <div className=" p-2 bg-stone-800 flex content-center h-16 justify-center items-center  ">
          <NavLink to="/checkout" onClick={toggleNav}  className="bg-red-200 rounded w-44">
              checkout
          </NavLink> 
        </div>

        </div>

        <div className={`${ navOpen ? 'bg-stone-900 z-10 absolute right-0 h-screen  w-screen opacity-75' 
          : 'opacity-0' }`} onClick={()=>{setnavOpen(false)}}>
      
      </div>
  


  </>
  )

}

export default Navigation;
