import React from 'react'
import {useState, useEffect, useRef} from 'react'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {useContext} from 'react'
import CartContext from '../../../context/CartContext.jsx'
import SearchFilter from '../searchFilter/SearchFilter.jsx'
import NavDesktop from './NavDesktop.jsx'
import SideBar from './SideBar.jsx'

const Navigation = () => {

  const cartContext = useContext(CartContext);
  const [navOpen, setnavOpen] = useState(false);
  const [supportMenu, setSupportMenu] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [subTotal, setSubTotal] = useState('');
  
  let cartArray = cartContext.cart;
  let setCart = cartContext.setCart;
  let toggleNav = () => {setnavOpen(!navOpen);}

  let calculateSubTotal = () => {
    let priceString = '';
    let priceInt = 0;
    let totalPriceString = '';
    cartArray.map((item)=>{ 
      priceString = item.price;
      priceString = priceString.slice(1)
      let nextPriceInt = parseInt(priceString);
      priceInt += nextPriceInt;
    });
    totalPriceString = "$" + priceInt.toString();
    setSubTotal(totalPriceString);
  }

  return (
    <>  
      <NavDesktop toggleNav={toggleNav} navOpen={navOpen} setnavOpen={setnavOpen}/>

      <SideBar toggleNav={toggleNav} calculateSubTotal={calculateSubTotal} setnavOpen={setnavOpen} navOpen={navOpen} cartArray={cartArray} subTotal={subTotal}
      setCart={setCart} setSubTotal={setSubTotal}/>
      
      <div className={`${ navOpen ? 'bg-black z-10 absolute right-0 h-full w-full opacity-75 blur-3xl' 
        : 'opacity-0' }`} onClick={()=>{setnavOpen(false); calculateSubTotal()}}>
      </div>
      
      <div className={`${supportMenu ? 'visible h-52' : 'hidden'}`}>
            <p>Resources</p>
            <p>FAQ</p>
      </div>
    </>
  )
}
export default Navigation;
