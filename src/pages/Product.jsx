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
  let sizingStyle = "border border-stone-300 px-6 ml-1 cursor-pointer"; 
  let sizingStyleSelected = "border border-stone-300 px-4 ml-1 cursor-pointer bg-stone-500";
  

  //functions
  let handleStyleChange=(size)=>{

  };

  //effects
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

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
      className="h-screen text-white"
    >
      <div className="flex justify-between px-52 mt-20">
        
        <Carousel itemData={itemData}/>  
        
        <div className="">
          
          <div className="font-bold text-2xl">
            {itemData.name}
          </div>
          
          <div className="mt-5">
            {itemData.description}
          </div>
          
          <div className="flex justify-between mt-5">
            
            {ratingNo == 1 ? <ShowOneStar/> : <></>}
            {ratingNo == 2 ? <ShowTwoStar/> : <></>}
            {ratingNo == 3 ? <ShowThreeStar/> : <></>}
            {ratingNo == 4 ? <ShowFourStar/> : <></>}
            {ratingNo == 5 ? <ShowFiveStar/> : <></>}
            <div>
              <p className="font-bold cursor-pointer underline ml-2">write a review</p>
            </div>
            
            <div className="ml-32 cursor-pointer">
              <IosShareIcon/> 
            </div>

          </div>

          <div className="flex justify-between mt-5">
            <div>
              select one
            </div>
            <div>
              sizing guide
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="border border-stone-300 px-6 cursor-pointer">
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
          <div className="flex justify-between mt-5">
              <button className="bg-blue-600 ">Add to cart</button>
              <button><AddBoxIcon/></button>
              <button><IndeterminateCheckBoxIcon/></button>
              <p className="font-bold">2</p>
              <p className="font-bold">{itemData.price}</p>
          </div>
        </div>    
      
      </div>



    </motion.div>
  )
}

export default Product



