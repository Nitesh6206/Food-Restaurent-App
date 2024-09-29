import React from 'react';
import heroImage from '../../Assets/bg-hero.jpg';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      {/* Overlay for better text readability */}
      <div className="overlay"></div>
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          {/* Left Column - Text Section */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
              Enjoy Our<br />Delicious Meal
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <Link  to="/Menu" 
              className=" btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
            >
              Order Now
            </Link>
          </div>
          {/* Right Column - Optional Additional Content */}
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
