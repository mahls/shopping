import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {

  let {id} = useParams();

  return (
    
    <div className="h-screen text-white">
      Product and {id}
    </div>
  )
}
export default Product
