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

  // variables 
  let itemData = location.state.productData;
  let {id} = useParams();
  let ratingNo = parseInt(itemData.rating);

  let sizingStyle         = "border border-stone-300 px-7 py-5 ml-1 transition-700 delay-600 ease-in-out cursor-pointer w-24 flex justify-center hover:bg-stone-900"; 
  let sizingStyleSelected = "border border-stone-300 bg-stone-900 px-7 py-5 ml-1 cursor-pointer w-24 flex justify-center";

  const [sizes, setSizes] = useState({small: false, medium: false, large: false, extra: false, extraextra: false});
  const [selectedSize, setSelectedSize] = useState('');
  const [hasSelected] = useState(false);

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
  });

  let selectSize=(size)=>{
      const allSizesFalse = Object.fromEntries(Object.entries(sizes).map(([size]) => [size, false]));
      setSizes(allSizesFalse);
      setSizes( prev => ({...prev,  [size]: !prev[size]}) );
      setSelectedSize(size);
  };

  let addToCart=()=>{
    if(selectSize == ''){
      alert('select one');
    }
  };

  let deselectSize=()=>{
    setSizes({small: false, medium: false, large: false, extra: false, extraextra: false});
  };

  //<div>
      //{Object.keys(itemData).map((keyName)=>{
        //return (<div>{itemData[keyName]}</div>)
      //})}
    //</div>

  //fix reviews and share button
  
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
              <p className="underline text-white text-lg cursor-pointer">Size Guide</p>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className={sizes.small == true ? sizingStyleSelected : sizingStyle} onClick={()=>{selectSize('small')}}>
              S
            </div>    
            <div className={sizes.medium ? sizingStyleSelected : sizingStyle} onClick={()=>{selectSize('medium')} }>
              M
            </div>    
            <div className={sizes.large ? sizingStyleSelected : sizingStyle} onClick={()=>{selectSize('large')}}>
              L
            </div>  
            <div className={sizes.extra ? sizingStyleSelected : sizingStyle} onClick={()=>{selectSize('extra')}} >
              XL
            </div>
            <div className={sizes.extraextra ? sizingStyleSelected : sizingStyle} onClick={()=>{selectSize('extraextra')}}>
              XXL
            </div>

          </div>

          <div
            onClick={addToCart}
            className="flex justify-center mt-10 bg-blue-600 h-12 font-bold align-center items-center text-2xl cursor-pointer hover:bg-blue-900 transition-300 delay-100"
          >
              Add to cart
          </div>

        </div>    
      
      </div>

    </motion.div>
  )
}

export default Product



