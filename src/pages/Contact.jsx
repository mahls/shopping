import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {

  let inputstyle="bg-stone-900 text-white rounded"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center flex-col align-center items-center mb-52"
    >
      
      <motion.div 
        className="text-stone-400 mt-20 mb-10 text-3xl"
      initial={{ opacity: 0, x:-300 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
        Still need help?
      </motion.div>

      <div className="">
      <motion.div
        initial={{ opacity: 0, x:300 }}
        animate={{ opacity: 1, x:0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-stone-200 h-96 w-96 rounded"
      >

      </motion.div>
      </div>
      
    </motion.div>
  )
}

export default Contact
