import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const CartItem = () => {
  return (
    <div className="h-20 text-white bg-stone-900 rounded m-4 p-2 flex justify-between align-center items-center px-10">
      
      <div>
        image
      </div>
      
      <div>
        $640
      </div>
      
      <div className="flex">

        <div>     
          <button><AddBoxIcon/></button>
        </div>
        
        <div className="px-5 font-bold">
          <p>2</p>
        </div>

        <div> 
          <button><IndeterminateCheckBoxIcon/></button>
        </div>

      </div>
      
    </div>
  )
}

export default CartItem
