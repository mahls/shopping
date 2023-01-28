
// imports
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

// icons
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

// data
import shopProducts from './data.js'

// pages
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Product from './pages/Product.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'

// components
import Navigation from './components/navigation/Navigation.jsx'

// context 
import CartContext from './context/CartContext.jsx'
import ThemeContext from './context/ThemeContext.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartContext>
          <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product:id" element={<Product/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </CartContext>
      </BrowserRouter>
    </div>
  )

}

export default App
