import React from 'react'
import {motion} from 'framer-motion' 

const Checkout = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
    >
      
      <div className="bg-stone-200 h-screen">
        <div className="flex border-stone-600">
          list of all products in cart
        </div>
      </div>


    </motion.div>
  )
}

export default Checkout
