import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {motion, AnimatePresence} from 'framer-motion'
import { Navigate } from "react-router-dom";
import Button from '@mui/material/Button';  
import { LazyLoadImage } from 'react-lazy-load-image-component';
  
const ProductCard = ({id, name, image, price, description, rating, notification, setnotification}) => {
 
  const [loading, setloading] = useState(true);
  const notifyProduct = () => toast(`${name} added to cart`, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: true,
    theme: "dark",
  }) 
  useEffect(() => {setTimeout(() => {setloading(false);}, 2000);}, [])
  let handleAddToCart=()=>{notificationToggle();};
  let addToFavourites=()=>{console.log('added');};

  let productData = {
    id: id,
    name: name,
    image: image,
    price: price,
    description: description,
    rating: rating,
  }

  let notificationToggle=()=>{
    setnotification(true);
    setTimeout(() => {    
      setnotification(false);
    }, 4000);
    console.log(notification);
  };



  return (
    <> 
      { 
      loading ? 
      <div className = "mx-5 my-5">
        <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.800' }}  width={240} height={195} />
        <hr className="opacity-0 h-1"/>
        <Skeleton variant="rectangular"  sx={{ bgcolor: 'grey.800' }} width={240} height={142} />
      </div>
      :
      <AnimatePresence> 

      <motion.div 
        whileHover={{scale: 1.02}}
        className=" relative bg-stone-900 shadow-xl w-80 text-white mx-5 my-5 border border-stone-700"
      >
        <ToastContainer/>
        
        <motion.div
          whileHover={{scale:2, x:-10, y:5, color:'red'}}
          className="absolute top-3 right-3"
        >
          <FavoriteBorderIcon size="large" onClick={addToFavourites} className="cursor-pointer"/>
        </motion.div>  

        <div className="">
          <Link to={`/products/product/${id}`} state={{productData}}>
            <img src={image} className="h-64 w-screen cursor-pointer"/> 
          </Link>
        </div>
        
        <div className="px-6">    
           <div className="mt-4">
             <p className="font-bold text-2xl">{name}</p>
           </div>
           <div>
             <p className="text-lg text-stone-300 mt-1">{description}</p>
           </div>
           <div className="flex justify-center mt-4">
             <p className="font-bold text-xl">{price}</p>
           </div>

           <motion.div 
              whileHover={{scale: 1.1}} 
              className="flex justify-center mb-5 mt-2 hover"
              exit={{y:-200, opacity: 0}}
            >
              <Link to={`/products/product/${id}`} state={{productData} }>
                <div className="bg-blue-600 py-1 text-xl font-bold w-full mt-2 hover:bg-blue-800 delay-100 transition-300 ease-in-out px-[67px]">
                  More Info 
                </div>
              </Link>
           </motion.div>
        </div>
      </motion.div>
      </AnimatePresence>

      }
    </>
    )
  }

export default ProductCard
