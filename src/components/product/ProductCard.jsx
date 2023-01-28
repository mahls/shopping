import React from 'react'

const ProductCard = () => {

  // take image, description and price through props
  // link to product with corresposing id
  // import cartStore
  
  let addToCart=()=>{
    console.log("added to cart...");
  };

  return (
    <div className="bg-stone-700 h-72 w-96 shadow-xl rounded mt-10">
      
      <div className="">
       image ok
      </div>
    
      <div className="mt-20">
        nice t shirt to weaar on a sunny day
      </div>
      
      <div className="flex align-center items-center justify-between px-20 mt-20">
        <button className="bg-red-200 cursor-pointer rounded w-24 h-12">add to cart</button>
        <p>$25</p>
      </div>

    
    </div>
  )
}

export default ProductCard
