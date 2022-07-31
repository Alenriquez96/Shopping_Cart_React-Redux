import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <Link to="/"><h1>Store</h1></Link>
        <Link to="/cart" title='Shopping cart'><img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png" alt="shopping cart"/></Link>
    </header>
  )
}

export default Header