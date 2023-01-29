
// imports
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

// data
import shopProducts from './data.js'

// pages
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Product from './pages/Product.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'
import Contact from './pages/Contact.jsx'

// components
import Navigation from './components/navigation/Navigation'

// context 
import {CartProvider} from './context/CartContext'
import {ThemeProvider} from './context/ThemeContext'

function App() {

  return (
    <div clasName="">
    <CartProvider>
    <ThemeProvider>
      <BrowserRouter>
          <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route index element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/product/:id"  element={<Product/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/contact"  element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
          </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
    </div>
  )

}

export default App


