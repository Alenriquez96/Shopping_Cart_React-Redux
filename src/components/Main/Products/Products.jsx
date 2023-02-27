import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../../../redux";


const Products = () => {
    const dispatch = useDispatch();
    const _products = useSelector(state => state._products);
    const numberItems = useSelector(state => state.numberItems);
    const [scroll, setScroll] = useState(0);


    const detectScroll = () => {
        setScroll(window.pageYOffset);
    }

    let cart = document.getElementById("cartFixed");
    useEffect(() => {
        window.addEventListener('scroll', detectScroll)

        if (scroll > 100) {
            cart.style.position = "fixed";
        }
        else if (cart !== null) {
            cart.style.position = "inherit";
        }
        return () => {
            window.removeEventListener('scroll', detectScroll)
        }
        // eslint-disable-next-line
    }, [scroll]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                const data = await res.data;
                dispatch(getAllProducts(data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch])


    if (_products.length !== 0) {
        return (
            <div id='productCardContainer'>
                {_products.map((product, i) => <Product key={i} product={product} />)}
                <Link id='cartFixed' to="/cart" title='Shopping cart'>
                    <img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png" alt="shopping cart" />
                    <span>{numberItems}</span>
                </Link>
            </div>
        )
    }
    else {
        return (
            <span className="loader"></span>

        )
    }
}


export default Products