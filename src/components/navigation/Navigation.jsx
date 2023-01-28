import React from 'react'
import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import {NavLink} from 'react-router-dom'

const Navigation = () => {

  const [navOpen, setnavOpen] = useState(false);

  let toggleNav = () => {
    setnavOpen(!navOpen);
    console.log(navOpen);
  }

  return (
    <>
      <div className="bg-stone-900 h-10 flex justify-between items-center px-5 py-5 text-white">
        
        <div className="align-middle justify-items-center">
          <p>LOGO</p>
        </div>
        
        <div className="flex justify-between w-52">
          <NavLink to="/Products">Products</NavLink>
          <ShoppingCartIcon className="cursor-pointer" onClick={toggleNav}/>
        </div>
        
      </div>
        
      <div className="bg-stone-800 h-screen w-72 absolute right-0">
         
      </div>
  </>

  )
}

export default Navigation;
