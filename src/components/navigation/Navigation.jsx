import React from 'react'
import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import LockIcon from '@mui/icons-material/Lock';
import {NavLink, useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import CartItem from './CartItem.jsx'
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);

  let toggleNav = () => {
    setnavOpen(!navOpen);
    console.log(navOpen);
  }

  let toggleTheme = () => {
    console.log("theme");
  }

  let navigateToCheckout = () => {
      setnavOpen(!navOpen);
      navigate("/checkout");
  }

  let activeClass = "text-stone-200 pr-2 pl-2"
  let unactiveClass = "text-stone-400 pr-2 pl-2"
  let activeHome = "text-stone-200"
  let unactiveHome = "text-ston-400"

  return (
    <div className="w-full overflow-hidden">
      
      <div className="bg-black h-16 text-xl flex justify-between items-center px-16 py-10 text-stone-200 border-b-2 border-stone-200">
        
        <div className="align-middle justify-items-center">
          <NavLink onClick={()=>setnavOpen(false)} to="/"><p className="font-bold text-2xl text-white">LOGO</p></NavLink>
        </div>
        
        <div className="flex justify-between">

          <NavLink 
            onClick={()=>setnavOpen(false)} to="/"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            HOME
          </NavLink>
          
          <NavLink onClick={()=>setnavOpen(false)} to="/checkout"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            CHECKOUT
          </NavLink>
          
          <NavLink onClick={()=>setnavOpen(false)} to="/contact"
            className={({ isActive }) => isActive ? activeClass : unactiveClass} 
          >
            SUPPORT
          </NavLink>  
          
          <NavLink onClick={()=>setnavOpen(false)} to="/products"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            PRODUCTS
          </NavLink>
          
          <NightlightRoundIcon className="cursor-pointer ml-4" onClick={toggleTheme}/>
          <ShoppingCartIcon className="cursor-pointer ml-4"  onClick={toggleNav}/>

        </div>
        
      </div>
        
      <div className={` z-50 bg-neutral-900 overflow-x-hidden z-50 w-1/4 absolute right-0 top-22 h-full flex flex-col transition ease-in-out delay-15 duration-30 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       
        <div className="flex text-white mt-5 px-5">
          <div className="flex-1">
            <CloseIcon fontSize="large" onClick={toggleNav} className="cursor-pointer"/>
          </div>
          <div>
            <p className="font-bold text-xl">YOUR CART</p>
          </div> 
        </div>

        <div className="flex justify-center bg-black py-4 my-5 mx-5">
          <p className="text-xl text-white font-bold">FREE SHIPPING OVER $75</p>
        </div>

        <div className="overflow-y-scroll">
          <CartItem/>
          <CartItem/>
        </div>
        {/* loop through cart items here after importing cart context */} 
         
        <div className="flex justify-center underline font-bold text-white mt-5 cursor-pointer">
          <div>
            <p>60 day return + Discreet Shipping</p>
          </div>
        </div>
        
        <div className="flex justify-between px-5 text-xl text-white font-bold mt-5">
          <div>
            <p>Subtotal:</p>
          </div>
          <div>
            <p>$244</p>
          </div>
        </div>    
        
        <div className="flex justify-center items-center px-5 mx-5 mt-5 bg-green-600 cursor-pointer" onClick={navigateToCheckout}>
          <NavLink to="/checkout" onClick={toggleNav} className="text-white text-xl font-bold py-3">
             <LockIcon/> Proceed to Checkout
          </NavLink> 
        </div>
        
        <div className="flex justify-center items-center mt-5">
          <p className="text-white">Shipping, taxes, and discounts added at checkout.</p>
        </div>



        
      </div>

        <div className={`${ navOpen ? 'bg-black z-10 absolute right-0 h-full w-screen opacity-75 blur-3xl' 
          : 'opacity-0' }`} onClick={()=>{setnavOpen(false)}}>
        </div>

  </div>
  )

}

export default Navigation;










