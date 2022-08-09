import React from 'react'
import './Product.css'

function Product({id,title,image,price}) {
  return (
    <div className='product'>
        <p>{title}</p>
        <img src={image} width="175px" height={250}></img><p>
            Available for free!
        </p>
<button className='addtocart'>Add to Cart</button>
<button className='customize'>Customize</button>

    </div>
  )
}

export default Product