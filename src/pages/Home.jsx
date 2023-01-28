import React from 'react'
import banner from '../assets/banner.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="mt-10 w-max h-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={banner} className="w-screen h-52"/>
    </motion.div>
  )
}

export default Home
