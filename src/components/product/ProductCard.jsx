import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({id, name, image, price, description, notification, setnotification}) => {

  const [loading, setloading] = useState(false)
  
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
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [])

  const notify = () => toast(`${name} added to cart`, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: true,
    theme: "dark",

  });

  
  return (
    <> 
    { loading ? 

      <div className = "mt-10 mx-5 w-72">
      <Skeleton variant="rounded" sx={{ bgcolor: 'grey.800' }}  width={220} height={190} />
      <hr className="opacity-0 h-1"/>
      <Skeleton variant="rounded"  sx={{ bgcolor: 'grey.800' }} width={220} height={50} />
      </div>

      :

    <div 
      className="bg-stone-700 h-80 shadow-xl rounded mt-10 mx-5 flex  flex-col justify-center w-72 py-5 text-white"
    >
      <ToastContainer className="z-50"/>
      
      <div className="flex align-center justify-center ">
       <Link to={`product/${id}`}><img src={image} className="rounded w-72 h-60 cursor-pointer"/> </Link>
      </div>
       
      <div className=" font-bold flex align-center justify-center border-stone-600 border-b-2 pt-2 pb-2">
        {description}
      </div>
      
        <div className="flex justify-between px-10 mb-7 mt-3">

          <div className="bg-blue-600 font-bold text-white cursor-pointer rounded py-1 px-1" onClick={notify}>
              add to cart <AddShoppingCartIcon/>
          </div>
        
          <div className="font-bold rounded py-1 px-1">
            {price}
          </div>

        </div>

    </div>
    }
    </>
  )
}

export default ProductCard
