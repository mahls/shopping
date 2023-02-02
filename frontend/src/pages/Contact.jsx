import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
    
  let cards = [
    {option : "A delivery order or return"}, 
    {option: "Security and privacy"},
    {option: "Payment, changes or gift cards"},
    {option: "Memberships, subscriptions, or communication"},
    {option: "Something else"},
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="mt-40 h-screen flex flex-col px-96"
    >
    
      <div>
        <div>
          <p className="text-white text-bold text-4xl">
            Welcome to Customer Support
          </p>
          <p className="text-white text-2xl mt-5">
            What would you like help with today? You can quickly take care of  most things here, or connect with us when needed
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-10">
        {
          cards.map((card)=>{
          return(
            <div className="w-2/5 h-24 bg-stone-800 my-5 mr-5 flex align-center justify-center items-center cursor-pointer hover:bg-stone-700 transition ease-in-out duration-50 delay-20">
                <p className="text-bold text-xl text-white ">{card.option}</p>
            </div>
          )
        })
        }
      </div>
      
    </motion.div>
  )
}

export default Contact
