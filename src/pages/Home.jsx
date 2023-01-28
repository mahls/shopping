import React from 'react'
import redbanner from '../assets/redbanner.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div className="mt-10 w-max h-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={redbanner} className="w-screen h-52"/>
    </motion.div>
  )
}

export default Home
