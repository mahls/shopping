import React from 'react'
import redbanner from '../../assets/redbanner.jpg'
import {motion} from 'framer-motion'
import Carousel from '../../components/carousel/Carousel'
import ThemeContext from '../../context/ThemeContext'
import CartContext from '../../context/CartContext.jsx'
import {useContext} from 'react'

const Home = () => {
  
  const theme = useContext(ThemeContext);
  const cart = useContext(CartContext);
  console.log(theme);
  console.log(cart);

  //<img src={redbanner} className="w-screen h-52"/>

  return (
    <motion.div className="mt-10 w-max h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      

      <div className="h-96 w-screen">
      
      </div>

    </motion.div>
  )
}

export default Home
