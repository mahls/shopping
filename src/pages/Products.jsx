import React from 'react'
import {useState, useEffect, useContext} from 'react'
import ProductCard from '../components/product/ProductCard'
import AddCartNotification from '../components/addCartNotification/AddCartNotification.jsx'
import banner from '../assets/banner.jpg'
import summerBanner from '../assets/summer_banner.jpg'
import {motion} from 'framer-motion'
import shopProducts from '../data.js'
import Skeleton from '@mui/material/Skeleton'
import CartContext from '../context/CartContext.jsx'

const Products = () => {
  
  const [notification, setnotification] = useState(false);
  const [loading, setloading] = useState(true);

  const {cart} = useContext(CartContext);
  
  console.log(cart);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, [])

  return (

    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 1}}
      className="bg-black relative"
    >

    { loading ? 
      <div className = "w-screen mt-14">
        <Skeleton animation="pulse" variant="rectangular" sx={{ bgcolor: 'grey.800' }}  width={10000} height={240} />
      </div> 
        :  
      <div className="bg-black h-60 mb-20 mt-14">
        <img src={summerBanner} className="h-80 w-screen cursor-pointer"/>
      </div>
    }

        <div className="flex flex-wrap justify-center bg-black px-3 py-10">
          {
          shopProducts.map((product)=>{
           return (
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    rating={product.rating}
                    notification={notification}
                    setnotification={setnotification}
                    key={product.id}
                  />
           )
          })
          }
        </div>

    </motion.div>

  )
}

export default Products
