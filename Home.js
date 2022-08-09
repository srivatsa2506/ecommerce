import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div>
    <div className='home'>
        <label className='banner_label'>ॐ</label>
        <label className='banner_label'>Happy Raksha Bandhan!</label>
        <label className='banner_label'>卐</label>
    </div>
   <div>
 <Product id="1" title="Card1" image="./Template2.png"price={10}/>
 <Product id="2" title="Card2" image="./Template1.png"price={10}/>

   </div>

    </div>
  )
}

export default Home