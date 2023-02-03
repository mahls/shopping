import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  
const ProductCard = ({id, name, image, price, description, rating, notification, setnotificationm}) => {
 
  const [loading, setloading] = useState(true);
  
  let productData = {
    id: id,
    name: name,
    image: image,
    price: price,
    description: description,
    rating: rating,
  }
  
  let addToCart=()=>{
    console.log("added to cart...");
  };

  let notificationToggle=()=>{
    setnotification(true);
    setTimeout(() => {    
      setnotification(false);
    }, 4000);
    console.log(notification);
  };

  let handleAddToCart=()=>{
    notificationToggle();
  };
  
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, [])

  const notifyProduct = () => toast(`${name} added to cart`, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: true,
    theme: "dark",
  })



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

      <div 
        className="bg-stone-900 shadow-xl w-80 text-white mx-5 my-5"
      >
        <ToastContainer/>
        
        <div className="relative bottom-0 right-0 text-blue-900 w-10">
          <FavoriteBorderIcon/>
        </div>  

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
           
           <div onClick={notifyProduct} className="flex justify-center mb-5 mt-2 hover">
             <button className="bg-blue-600 py-1 text-xl font-bold w-full mt-2 hover:bg-blue-800 delay-100 transition-300 ease-in-out">


          <Link to={`/products/product/${id}`} state={{productData}}>
        More Info    
      </Link>



      </button>
           </div>
        </div>

    </div>
    }
    </>
  )
}

export default ProductCard
