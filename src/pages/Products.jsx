import React from 'react'
import ProductCard from '../components/product/ProductCard'
import AddCartNotification from '../components/addCartNotification/AddCartNotification.jsx'
import banner from '../assets/banner.jpg'
import {motion} from 'framer-motion'
import shopProducts from '../data.js'

const Products = () => {

  console.log(shopProducts);


  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
      className="mb-20"
    >
      
      <div className="mt-10 h-52 bg-blue-500 mb-10">
        <img src={banner} className=" h-52 w-screen"/>
      </div>
      <div className="h-screen overflow-y-scroll">
      <div className="w-screen align-center justify-center min-h-full flex flex-wrap overflow-scroll">
        {
          shopProducts.map((product)=>{
           return (
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description} 
                    key={product.id}
                  />
           )
          })
        }
      </div>
      </div>


    </motion.div>

  )
}

export default Products
