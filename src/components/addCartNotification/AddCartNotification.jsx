import React from 'react'
import {motion} from 'framer-motion'



const AddCartNotification = ({notification}) => {

    
  let notificationFalse = "bg-green-600 h-9 rounded absolute top-0 flex text-stone-200 justify-center items-center font-bold rounded w-11/12 transition ease-in-out delay-300 duration-200"
  let notificationTrue = "bg-green-600 h-9 rounded sticky top-20 flex text-stone-200 justify-center items-center font-bold rounded w-11/12 transition ease-in-out delay-300 duration-200"
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y:-200 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center"
    >
      <motion.div

        className={notification ? notificationTrue : notificationFalse}
      >
        <p>Product added to cart</p>
      </motion.div>
    </motion.div>
  )
}

export default AddCartNotification
