
// imports
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// icons
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

// data
import Products from './data.js'

// pages
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Product from './pages/Product.jsx'

// components
import Navigation from './components/navigation/Navigation.jsx'

// context 
import CartContext from './context/CartContext.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartContext>
          <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route path="/home" element={<Home/>}/>
                <Route path="/product:id" element={<Product/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </CartContext>
      </BrowserRouter>
    </div>
  )

}

export default App
