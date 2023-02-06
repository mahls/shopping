// imports
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Layout from './pages/shop/Layout.jsx'
import Home from './pages/shop/Home.jsx'
import NoPage from './pages/shop/NoPage.jsx'
import Product from './pages/shop/Product.jsx'
import Products from './pages/shop/Products.jsx'
import Checkout from './pages/shop/Checkout.jsx'
import Contact from './pages/shop/Contact.jsx'

import DashboardLogin from './pages/admin/DashboardLogin.jsx'

import {CartProvider} from './context/CartContext'
import {ThemeProvider} from './context/ThemeContext'
import {SearchFilterProvider} from './context/SearchFilterContext.jsx'
import {FavsContextProvider} from './context/FavouritesContext.jsx'

function App() {
  return (
    <div className="overflow-x-hidden bg-black">
    <FavsContextProvider>
    <SearchFilterProvider>
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
            <Route path="/admin" element={<DashboardLogin/>}/>
          </Routes>
          </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
    </SearchFilterProvider>
    </FavsContextProvider>
    </div>
  )
}
export default App
