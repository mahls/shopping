import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-stone-800 flex justify-between align-center items-center h-72 text-white px-16 py-5 text-stone-500 px-40 relative ">

      <div className="text-2xl text-stone-500">
        <p className="bold">LOGO</p>
      </div>

      <div>
        
        <p className="cursor-pointer mt-2 text-xl" ><TwitterIcon   /> Twitter</p>
        <p className="cursor-pointer mt-2 text-xl" ><FacebookIcon  /> Facebook</p>
        <p className="cursor-pointer mt-2 text-xl" ><InstagramIcon /> Instagram</p>
        <p className="cursor-pointer mt-2 text-xl" ><YouTubeIcon   /> Youtube</p>

      </div>

      <div>
        <div className="mt-2 text-xl">Contact</div>
        <div className="mt-2 text-xl">Customer Support: lorem@gmail.com </div>
        <div className="mt-2 text-xl">Phone: (+16) 029423992 </div>
        <div className="mt-2 text-xl">Enquire: enquirecommerce@mail.com </div>
      </div>
    
    </div>
  )
}

export default Footer
