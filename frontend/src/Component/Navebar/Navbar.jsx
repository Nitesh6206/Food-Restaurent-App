// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar sticky navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 shadow-lg">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="orange-text m-0">
          <i className="fa fa-utensils me-3"></i>Food's Heaven
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/menu" className="nav-item nav-link">
            Menu
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {/* Shopping Cart Link */}
          <Link to="/Order" className="btn-cart position-relative me-3">
            <FaShoppingCart className="cart-icon" />
            {cartItemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </Link>
          
          {/* Logout Button */}
          <Link to="/logout" className="btn btn-outline-light rounded-pill px-3">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
