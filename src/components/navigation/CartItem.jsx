import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CloseIcon from '@mui/icons-material/Close';
import {useContext} from 'react'

const CartItem = () => {

  // take in props for item
  // import cart context and write functions add minus and clear
  
  let incrementItem=()=>{

  };
  
  let decrementItem=()=>{

  };
  
  let removeItem=()=>{

  };
 
  return (
    <div className="h-28 text-white bg-stone-900 m-4 p-2 flex justify-between align-center items-center px-10 cursor-pointer">
      
      <div>
        image
      </div>
      
      <div>
        $24
      </div>
      
      <div className="flex">


        <div className="px-5 font-bold">
          <p>1</p>
        </div>

        <div onClick={incrementItem}>     
          <button><AddBoxIcon/></button>
        </div>
        

        <div onClick={decrementItem}> 
          <button><IndeterminateCheckBoxIcon/></button>
        </div>
        
        <div>
          <CloseIcon onClick={removeItem} className="cursor-pointer"/>
        </div>

      </div>
      
    </div>
  )
}

export default CartItem
