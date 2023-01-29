import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../components/navigation/Navigation.jsx'
import Footer from '../components/footer/Footer.jsx'

const Layout = () => {
  return (

    <div className="bg-stone-800">
      
      <Navigation/>
      
      <div className="">
        <Outlet/>
      </div>
      
      <Footer/>

    </div>

  )
}

export default Layout;
