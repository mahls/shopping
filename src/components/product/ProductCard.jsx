import React from 'react'

const ProductCard = ({id, name, image, price, description}) => {

  // take image, description and price through props
  // link to product with corresposing id
  // import cartStore
  // run function to show notification that item has been added to cart
  
  let addToCart=()=>{
    console.log("added to cart...");
  };

  return (
    <div className="bg-stone-700 h-72 shadow-xl rounded mt-10 mx-5 flex  flex-col justify-center w-72 py-5">
      
      <div className="flex align-center justify-center">
        <img src={image} className="w-fit h-24"/>
      </div>
       
      <div className=" flex align-center justify-center border-stone-500 border-t-2 border-b-2">
        {description}
      </div>
      
      <div className=" flex px-10 w-52 mt-20  justify-between">
        <div className="flex align-center pr-10">
          <button className="bg-stone-400 font-bold text-white cursor-pointer rounded w-24 px-2">add to cart</button>
        </div>
        <div className="flex align-center justify-center">
          <p>{price}</p>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
