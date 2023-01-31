import React from 'react'
import {useState, useEffect} from 'react'
import ProductCard from '../components/product/ProductCard'
import AddCartNotification from '../components/addCartNotification/AddCartNotification.jsx'
import banner from '../assets/banner.jpg'
import summerBanner from '../assets/summer_banner.jpg'
import {motion} from 'framer-motion'
import shopProducts from '../data.js'
import Skeleton from '@mui/material/Skeleton';

const Products = () => {
  
  const [notification, setnotification] = useState(false);
  const [loading, setloading] = useState(true);

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
      className="mb-20"
    >
      
      {notification && <AddCartNotification notification={notification}/> }
        
      
    { loading ? 
      <div className = "mt-10 h-52 mb-10 w-screen">
      <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.800' }}  width={10000} height={185} />
      </div> 
        :  
        <div className="mt-10 h-60 bg-blue-500 mb-5">
          <img src={summerBanner} className=" h-60 w-screen cursor-pointer"/>
        </div>
    }
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
                    rating={product.rating}
                    notification={notification}
                    setnotification={setnotification}
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
