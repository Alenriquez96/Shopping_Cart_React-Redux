import React, { useEffect } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const _products = useSelector(state=>state._products)



    useEffect(() => {
        const fetchData = async () =>{
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                const data = await res.data;
                dispatch({
                    type: "GET_ALL_PRODUCTS",
                    payload: data
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    

  return (
    <div id='productCardContainer'>
        {_products.map((product,i)=><Product key={i} product={product}/>)}
    </div>
  )
}

export default Products