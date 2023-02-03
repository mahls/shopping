import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../components/navigation/Navigation.jsx'
import Footer from '../components/footer/Footer.jsx'


const Layout = () => {
  return (

    <div className="bg-[#080808] h-full relative">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>

  )
}

export default Layout;
