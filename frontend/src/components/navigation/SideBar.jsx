import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LockIcon from '@mui/icons-material/Lock';
import {NavLink, useNavigate} from 'react-router-dom'
import CartItem from './CartItem.jsx'
import {useState} from 'react'

const SideBar = ({navOpen, calculateSubTotal, toggleNav, cartArray, subTotal, setCart}) => {

  const [quantity, setQuantity] = useState(1);

  let navigateToCheckout = () => {
      setnavOpen(!navOpen);
      navigate("/checkout");
  }

  return (
    <div>
      <div className={` z-50 overflow-y-scroll bg-neutral-800 h-full z-50 w-2/5 absolute right-0 flex flex-col transition ease-in-out delay-15 duration-30 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
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

        <div className="overflow-y-scroll h-[240px]">
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
            })} 
        </div>
         
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
        
        <div className="flex justify-center items-center mt-5 mb-20">
          <p className="text-white">Shipping, taxes, and discounts added at checkout.</p>
        </div>
        
      </div>
    </div>
  )
}
export default SideBar
