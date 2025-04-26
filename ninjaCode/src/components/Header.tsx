import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

// Carousel images (using your provided URLs)
const carouselImages = [
  'https://framerusercontent.com/images/KExxxw4ObE9qXhCFwOugzPf2w.webp',
  'https://framerusercontent.com/images/kuxCWrCpVyLY8wQnUqqRsmDMmE.png',
  'https://framerusercontent.com/images/nNS2f5gUumY0r5zW0tQIaPFhgkM.png',
];

// Placeholder URLs for company logos (replace with actual URLs)
const companyLogos = [
  'https://framerusercontent.com/images/GxEjqBJwBqszrAT7J3yxzd8JNvY.png?scale-down-to=512',
  'https://framerusercontent.com/images/C4hJq64I5hgvNm4gCOoGcDHvwhk.png',
  'https://framerusercontent.com/images/vObQP9CoD4bZz7StLm9YcIqua4.png',
  'https://framerusercontent.com/images/Ilr3bxmQOETtoVodcxWBbTmfg.png?scale-down-to=512',
  'https://framerusercontent.com/images/dWMDfWkORDAo3Tzpjnt7GQyOmh4.png',
  'https://framerusercontent.com/images/x2Zm6zi427C3aYm224pjFo5WA.png?scale-down-to=512',
  'https://framerusercontent.com/images/Kpaei7xvI0Gsrl7QWvqr88dc7OE.png?scale-down-to=512',
  'https://framerusercontent.com/images/1c1kbaA66uWPLlBzNA5QO7te0jQ.png',
];

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic carousel effect: change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header className="header-container">
      {/* Background Carousel */}
      <div className="background-carousel">
        <img
          src={carouselImages[currentImageIndex]}
          alt={`Background Image ${currentImageIndex + 1}`}
          className="background-image"
        />
      </div>

      {/* Hero Section Content */}
      <div className="hero-content-overlay">
        {/* Left Side: Text and Buttons */}
        <div className="hero-content">
          <h1>
            Easy In-Person Payments
            <br />
            for India’s finest disruptors
          </h1>
          <p>Quick Payments | Seamless Integration | Top-tier UPI stack</p>
          <div className="hero-buttons">
            <button className="sign-up-now">
              Sign Up Now <span className="arrow">→</span>
            </button>
            <button className="know-more">Know More</button>
          </div>
        </div>

        {/* Right Side: Product Card */}
        <div className="product-card">
          <div className="product-card-inner">
            <img src="https://framerusercontent.com/images/nNS2f5gUumY0r5zW0tQIaPFhgkM.png?scale-down-to=1024" alt="Razorpay POS" className="product-image" />
            <div className="product-details">
              <h4>Razorpay POS</h4>
              <p className="product-name">NextGen</p>
              <p className="product-price">POS Terminals</p>
              <button className="select-payment">Select Payment Method</button>
              <div className="payment-options">
                <span>Card</span> | <span>UPI ID</span> | <span>Netbanking</span> | <span>EMI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial">
        <p className="testimonial-text">NESTASIA FOUNDER</p>
        <p className="testimonial-name">Anurag Agrawal</p>
      </div>

      {/* Bottom Navigation Tabs */}
      <div className="bottom-tabs">
        <div className="tabs-container">
          <button className="tab active">
            <span className="icon">📍</span> I’m here to
          </button>
          <button className="tab">
            Accept Payments
          </button>
          <button className="tab">
            Make Payments
          </button>
          <button className="tab">
            Start Business Banking
          </button>
          <button className="tab">
            Get Credit Loans
          </button>
          <button className="tab">
            Automate Payroll
          </button>
        </div>
        <div className="find-product">
          // Find the best product for your business
        </div>
      </div>

      {/* Company Logos */}
      <div className="company-logos">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="company-logo" />
        ))}
      </div>
    </header>
  );
};

export default Header;