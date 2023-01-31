import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({id, name, image, price, description, rating, notification, setnotificationm}) => {

  const [loading, setloading] = useState(true);
  
  let productDataObj = {
    id: id,
    name: name,
    image: image,
    price: price,
    description: description,
    rating: rating,
  }

  const [productData, setProductData] = useState(productDataObj);
  
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

  const notify = () => toast(`${name} added to cart`, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: true,
    theme: "dark",

  })
  
  return (
    <> 
    { 
      loading ? 

      <div className = "mt-24 mx-5 w-80 h-96 w-80">
        <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.800' }}  width={237} height={182} />
        <hr className="opacity-0 h-1"/>
        <Skeleton variant="rectangular"  sx={{ bgcolor: 'grey.800' }} width={237} height={145} />
      </div>

      :

      <div 
        className="bg-stone-800 shadow-xl mt-32 mx-5 flex h-96 flex-col justify-center w-80 text-white "
      >
        <ToastContainer/>
      
        <div className="flex align-center justify-center ">
          <Link to={`/products/product/${id}`} state={{productData}}><img src={image} className="w-80 h-60 cursor-pointer"/> </Link>
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
           
           <div onClick={notify} className="flex justify-center mb-20 mt-2">
             <button className="bg-blue-900 py-1 text-xl font-bold w-full mt-2">Add to Cart <AddShoppingCartIcon/></button>
           </div>
        </div>

    </div>
    }
    </>
  )
}

export default ProductCard
