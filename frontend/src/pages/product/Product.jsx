import React from 'react';
import "./Product.scss";
import Single from '../../components/single/Single';
import { singleProduct } from '../../data';

const Product = () => {

  // Fetch data and send to single component

  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product