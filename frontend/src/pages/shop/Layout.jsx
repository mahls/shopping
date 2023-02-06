import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../../components/shop/navigation/Navigation.jsx'
import Footer from '../../components/shop/footer/Footer.jsx'
import {motion} from 'framer-motion'

const Layout = () => {
  return (

    <motion.div 
      className="bg-[#080808] h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} 
    >
        <Navigation/>
        <Outlet/>
        <Footer/>
    </motion.div>

  )
}

export default Layout;
