import React from 'react';
import { useDispatch } from 'react-redux';


const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='productCard'>
        <h3>{props.product.title}</h3>
        <h4>{props.product.category}</h4>
        <img src={props.product.image} alt={props.product.title}/>
        <h5>{props.product.price}</h5>
        <p>{props.product.description}</p>
        <button onClick={()=>{
          dispatch({
            type: "ADD_CART",
            payload: props.product
          })
        }}>Add to cart</button>
    </div>
  )
}

export default Product 