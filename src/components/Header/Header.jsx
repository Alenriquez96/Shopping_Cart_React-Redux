import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Header = () => {
  const numberCart = useSelector(state => state.numberItems);
  return (
    <header>
      <Link to="/"><h1>Store</h1></Link>
      <Link to="/cart" title='Shopping cart' id='cartIconContainer'>
        <img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png" alt="shopping cart" />
        <span>{numberCart}</span>
      </Link>
    </header>
  )
}

export default Header