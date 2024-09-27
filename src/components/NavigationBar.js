import React from 'react';
import { Link } from 'react-router-dom';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import '../../src/NavigationBar.css';

const NavigationBar = () => {
  return (
    <header className="nav-bar">
      <div className="nav-left">
        <div className="menu-icon">
          {/* Replace with a proper icon */}
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/magazine">Magazine</Link>
        </nav>
      </div>
      {/* <div className="nav-right">
        <FaSearch className="icon" />
        <FaShoppingCart className="icon" />
        <Link to="/login">Login</Link>
      </div> */}
    </header>
  );
};

export default NavigationBar;
