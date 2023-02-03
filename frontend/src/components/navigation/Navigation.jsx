import React from 'react'
import {useState, useEffect} from 'react'
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
import CartContext from '../../context/CartContext.jsx'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Search from '../searchFilter/Search.jsx'


// move toastify notifications from products to product
// make favourites context
// have banner as swiper
// implement dark light mode


const Navigation = () => {
 
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const [navOpen, setnavOpen] = useState(false);
  const [supportMenu, setSupportMenu] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [subTotal, setSubTotal] = useState('');

  let cartArray = cartContext.cart;
  let setCart = cartContext.setCart;

  let activeClass = "text-stone-200 pr-4 pl-4"
  let unactiveClass = "text-stone-400 pr-4 pl-4"
  let activeHome = "text-stone-200"
  let unactiveHome = "text-ston-400"


  useEffect(() => {
    calculateSubTotal();
  }, [navOpen])

  let toggleNav = () => {
    
    //let total = calculateSubTotal();
    setnavOpen(!navOpen);
    console.log(navOpen);
    console.log(cartContext.cart);
    console.log(subTotal);
  }

  let toggleTheme = () => {console.log("theme");}

  let navigateToCheckout = () => {
      setnavOpen(!navOpen);
      navigate("/checkout");
  }

  let calculateSubTotal = () => {

    let priceString = '';
    let priceInt = 0;
    let totalPriceString = '';
    
    cartArray.map((item)=>{ 
      priceString = item.price;
      priceString = priceString.slice(1);
      let nextPriceInt = parseInt(priceString);
      priceInt += nextPriceInt;
      console.log(priceInt);
    });

    totalPriceString = "$" + priceInt.toString();
    setSubTotal(totalPriceString);
  }

  let openSupport={
  };



  return (
    <>
      
      <div className="bg-black h-16 text-xl flex justify-between items-center px-16 py-10 text-stone-200 border-b-2 border-stone-200">
        
        <div className="align-middle justify-items-center">
          <NavLink onClick={()=>setnavOpen(false)} to="/"><p className="font-bold text-2xl text-white">LOGO</p></NavLink>
        </div>

        <Search/>
        
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
          
          <NavLink onClick={()=>setnavOpen(false)} to="/contact" on
            className={({ isActive }) => isActive ? activeClass : unactiveClass} onMouseEnter={openSupport} 
          >
            SUPPORT <KeyboardArrowDownIcon/>
          </NavLink>  
          
          <NavLink onClick={()=>setnavOpen(false)} to="/products"
            className={({ isActive }) => isActive ? activeClass : unactiveClass}
          >
            PRODUCTS
          </NavLink>
          
          <NightlightRoundIcon className="cursor-pointer ml-4" onClick={toggleTheme}/>
          <FavoriteBorderIcon className="cursor-pointer ml-4" />
          <LocalMallIcon className="cursor-pointer ml-4"  onClick={toggleNav}/>

        </div>
        
      </div>
        
      <div className={` z-50 bg-neutral-800 h-screen z-50 w-1/4 absolute right-0 flex flex-col transition ease-in-out delay-15 duration-30 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       
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
          { cartArray.length == 0 ? 
            <div className="px-2 flex justify-center">
              <p className="text-2xl text-stone-400 mx-5 my-5">Nothing to display</p>
            </div>
            :
            cartArray.map((item)=>{
            return(
              <CartItem 
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                cart={cartArray}
                setCart={setCart}
                size={item.size}
              />
            );
            })
          } 
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
            <p>{subTotal}</p>
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

        <div className={`${ navOpen ? 'bg-black z-10 absolute right-0 h-screen w-screen opacity-75 blur-3xl' 
          : 'opacity-0' }`} onClick={()=>{setnavOpen(false)}}>
        </div>

        <div className={`${supportMenu ? 'visible h-52' : 'hidden'}`}>
            <p>Resources</p>
            <p>FAQ</p>
        </div>

  </>
  )

}

export default Navigation;
