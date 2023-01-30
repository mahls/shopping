import React from 'react'
import redbanner from '../assets/redbanner.jpg'
import {motion} from 'framer-motion'
import Carousel from '../components/carousel/Carousel'
import ThemeContext from '../context/ThemeContext'
import CartContext from '../context/CartContext.jsx'
import {useContext} from 'react'

const Home = () => {
  
  const theme = useContext(ThemeContext);
  const cart = useContext(CartContext);
  console.log(theme);
  console.log(cart);

  return (
    <motion.div className="mt-10 w-max h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      
      <img src={redbanner} className="w-screen h-52"/>

      <div className="h-96 w-screen">
        
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>ReactJS Dropdown</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>
        </div>
      
      </div>

    </motion.div>
  )
}

export default Home
