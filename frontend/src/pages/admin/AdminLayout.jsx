import React from 'react'
import {Outlet} from 'react-router-dom'
import {motion} from 'framer-motion'

const Layout = () => {
  return (
    <motion.div 
      className="bg-[#FFF] h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} 
    >
        <Outlet/>
    </motion.div>
  )
}
export default Layout;
