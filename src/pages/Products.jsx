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
      className="bg-black h=screen"
    >
      

    { loading ? 
      <div className = "w-screen mt-14">
        <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.800' }}  width={10000} height={240} />
      </div> 
        :  
      <div className="  bg-black h-60 mb-20 mt-14  ">
        <img src={summerBanner} className=" h-80 w-screen cursor-pointer"/>
      </div>
    }


       
        <div className="flex flex-wrap justify-center bg-black px-3 py-10 rounded">
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
