import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CloseIcon from '@mui/icons-material/Close';
import {useContext} from 'react'

const CartItem = ({id, image, name, price, size, cart, setCart}) => {

  let incrementItem=()=>{

  };
  
  let decrementItem=()=>{
  };
  
  let removeItem=()=>{
  };
 
  return (
    <div className="h-28 text-white bg-black m-4 p-2 flex justify-between align-center items-center px-10 cursor-pointer">

      <div>
        <img src={image} className="h-20 w-24"/>
      </div>
      <div>
        <p className="text-xl">{price}</p>
        <p className="text-xl text-white">{size}</p>
      </div>
      
      <div className="flex">
        <div className="px-5 font-bold">
          <p className="text-xl">1</p>
        </div>
        <div onClick={incrementItem}>     
          <button><AddBoxIcon/></button>
        </div>
        <div onClick={decrementItem}> 
          <button><IndeterminateCheckBoxIcon/></button>
        </div>
        <div className="">
          <CloseIcon onClick={removeItem} className="cursor-pointer"/>
        </div>
      </div>
      
    </div>
  )
}

export default CartItem
