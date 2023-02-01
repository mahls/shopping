import React from 'react'
import {useState, useEffect} from'react'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
import Carousel from '../components/carousel/Carousel'
import { useLocation } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

  // constants
  const location = useLocation();

  const [productAmount, setproductAmount] = useState({
    quantity: 2,
    price: "21",
  })

  const [sizeSelected, setSizeSelected] = useState({
    small: false,
    medium: false,
    large: false,
    extralarge: false,
    extraextralarge: false,
  });

  // variables 
  let itemData = location.state.productData;
  let {id} = useParams();
  let ratingNo = parseInt(itemData.rating);
  console.log(ratingNo);
  let sizingStyle = "border border-stone-300 px-7 py-5 ml-1 cursor-pointer w-24 flex justify-center"; 
  let sizingStyleSelected = "border border-stone-300 px-4 ml-1 cursor-pointer bg-stone-500";

  // functions
  let handleStyleChange=(size)=>{

  };

  // effects
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  //  functions
  const notify = () => toast(`${name} added to cart`, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: true,
    theme: "dark",
  })

  //<div>
      //{Object.keys(itemData).map((keyName)=>{
        //return (<div>{itemData[keyName]}</div>)
      //})}
    //</div>

  //fix reviews and share button
  //
  //
  let ShowOneStar=()=>{
    return(
      <>
        <StarIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/>
      </>
    );
  }

  let ShowTwoStar=()=>{
    return(
      <>
        <StarIcon/> <StarIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/>
      </>
    );
  }


  let ShowThreeStar=()=>{
    return(
      <>
        <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon/> <StarBorderIcon/>
      </>
    );
  }

   let ShowFourStar=()=>{
    return(
      <>
        <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon/>
      </>
    );
  }

   let ShowFiveStar=()=>{
    return(
      <>
        <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
      </>
    );
  }
 
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}  
      className="h-screen text-white bg-black"
    >
      
      <div className="flex justify-between px-64 pt-32">
       
        <Carousel itemData={itemData}/>  
        
        <div className="ml-10">
          
          <div>
            <p className="font-bold text-6xl">{itemData.name}</p>
          </div>
          
          <div className="mt-5">
            <p className="text-3xl text-stone-300">{itemData.description}</p>
          </div>
          
          <div className="mt-10">
            <p className="text-3xl">{itemData.price} AUD</p>
          </div>
          
          <div className="flex justify-between mt-10">
            
            {ratingNo == 1 ? <ShowOneStar/> : <></>}
            {ratingNo == 2 ? <ShowTwoStar/> : <></>}
            {ratingNo == 3 ? <ShowThreeStar/> : <></>}
            {ratingNo == 4 ? <ShowFourStar/> : <></>}
            {ratingNo == 5 ? <ShowFiveStar/> : <></>}
            
            <div className="">
              <p className="font-bold cursor-pointer underline ml-2 text-lg">Write a review</p>
            </div>
            
            <div className="ml-32 cursor-pointer pb-2">
              <IosShareIcon fontSize="large"/> 
            </div>
            
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <p className="text-stone-300 text-lg">SELECT SIZE</p>
            </div>
            <div>
              <p className="underline text-white text-lg">Size Guide</p>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className={sizingStyle}>
              S
            </div>    
            <div className={sizingStyle}>
              M
            </div>    
            <div className={sizingStyle}>
              L
            </div>  
            <div className={sizingStyle}>
              XL
            </div>
            <div className={sizingStyle}>
              XXL
            </div>

          </div>

          <div className="flex justify-center mt-10 bg-blue-600 h-12 font-bold align-center items-center text-2xl">
              Add to cart
          </div>

        </div>    
      
      </div>

    </motion.div>
  )
}

export default Product



