import React from 'react'
import ProductCard from '../components/product/ProductCard'
import banner from '../assets/banner.jpg'
import {motion} from 'framer-motion'

const Products = () => {
  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
    >
      
      <div className="mt-10 h-52 bg-blue-500">
        <img src={banner} className="w-72 h-52 w-screen"/>
      </div>

      <ProductCard/>

    </motion.div>

  )
}

export default Products
