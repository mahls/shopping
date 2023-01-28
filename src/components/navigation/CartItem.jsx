import React from 'react'

const CartItem = () => {
  return (
    <div className="h-20 text-white bg-stone-900 rounded m-4 p-2 flex justify-between">
      
      <div>
        image
      </div>
      
      <div>
        $640
      </div>
      
      <div className="flex">

        <div>     
          <button>+</button>
        </div>
        
        <div>
          <p>2</p>
        </div>

        <div> 
          <button>-</button>
        </div>

      </div>
      
    </div>
  )
}

export default CartItem
