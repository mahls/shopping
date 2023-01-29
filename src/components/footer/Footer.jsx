import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className="bg-stone-800 flex justify-between align-center items-center h-52 text-white px-10 py-5 text-stone-500">

      <div className=" text-xl text-stone-500">
       
      <p className="bold">LOGO</p>

      </div>

      <div>
        
        <p className="cursor-pointer mt-2" ><TwitterIcon   /> Twitter</p>
        <p className="cursor-pointer mt-2" ><FacebookIcon  /> Facebook</p>
        <p className="cursor-pointer mt-2" ><InstagramIcon /> Instagram</p>
        <p className="cursor-pointer mt-2" ><YouTubeIcon   /> Youtube</p>

      </div>

      <div>
        <div className="mt-2">Contact</div>
        <div className="mt-2">Customer Support: lorem@gmail.com </div>
        <div className="mt-2">Phone: (+16) 029423992 </div>
        <div className="mt-2">Enquire: enquirecommerce@mail.com </div>
      </div>
    
    </div>
  )
}

export default Footer
