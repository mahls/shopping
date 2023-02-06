import React from 'react'
import {useState, useEffect, useContext} from'react'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
import Carousel from '../../components/carousel/Carousel'
import { useLocation } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { ToastContainer, toast } from 'react-toastify';
import CartContext from '../../context/CartContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import '../../App.css'

const Product = () => {

  useEffect(() => {window.scrollTo(0,0);},[])
  const location = useLocation();
  const cartContext = useContext(CartContext);
  const [sizes, setSizes] = useState({small: false, medium: false, large: false, extra: false, extraextra: false});
  const [selectedSize, setSelectedSize] = useState('');
  const [hasSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something went wrong');
  const [error, setError] = useState(false);
  const notifyAdd = () => toast(`${selectedSize} ${itemData.name} added to bag`, {
    position: "top-left",
    autoClose: 500,
    hideProgressBar: true,
    theme: "dark",
  });

  let {id} = useParams();
  let itemData = location.state.productData;
  let ratingNo = parseInt(itemData.rating);
  let sizingStyle = "border border-stone-300 text-2xl px-7 py-5 ml-1 transition-700 delay-600 ease-in-out cursor-pointer w-24 flex justify-center hover:bg-stone-900"; 
  let sizingStyleSelected = "border text-2xl border-stone-300 bg-stone-700 px-7 py-5 ml-1 cursor-pointer w-24 flex justify-center";
  
  let selectSize=(size)=>{
      const allSizesFalse = Object.fromEntries(Object.entries(sizes).map(([size]) => [size, false]));
      setSizes(allSizesFalse);
      setSizes( prev => ({...prev,  [size]: !prev[size]}) );
      setSelectedSize(size);
      if(error) setError(!error);
  };

  let addToCart=()=>{
    if(selectedSize == ''){
      setErrorMessage('Please select a size');
      setError(true);
      return
    }
    
    //check if product name is the same and check if size is the same then increment price
    //itemData holds all data for this product, remember this is the product page passed from product(s)
    
    cartContext.setCart(
      [...cartContext.cart, {
        name:`${itemData.name}`, 
        price:`${itemData.price}`, 
        image:`${itemData.image}`,
        size:`${selectedSize}`,
        id: Math.random(),
        }
      ]);
    console.log(cartContext.cart);
    notifyAdd();
  };
  
  let ShowOneStar=()=>{return(<><StarIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/></>);}
  let ShowTwoStar=()=>{return(<><StarIcon/> <StarIcon/> <StarBorderIcon/> <StarBorderIcon/> <StarBorderIcon/></>);}
  let ShowThreeStar=()=>{return(<><StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon/> <StarBorderIcon/></>);}
  let ShowFourStar=()=>{return(<><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarBorderIcon/></>);}
  let ShowFiveStar=()=>{return(<><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></>);}
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}  
      className="h-screen text-white bg-[#0f0f0f]"
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

          <div className="mt-10">
            <Button onClick={addToCart} style={{ fontSize: '15px', fontWeight: 700 }} sx={{width: 400,}} variant="contained">Add to Bag</Button>
          </div>
          <ToastContainer />
          {error && <motion.div initial={{x:-50}} animate={{x:50, x:0}} transition={{delay:0.1, type: 'spring'}} 
            className="text-red-600 mt-5 flex justify-center text-2xl transition-300 delay-50 ease-in-out">{errorMessage}</motion.div> }
        </div>    
      </div>
    </motion.div>
  )
}
export default Product
