import React from 'react';
import '../styles/AcceptPayments.css';

const AcceptPayments: React.FC = () => {
  return (
    <section className="accept-payments-section">
      {/* Top Navigation */}
      {/* <nav className="top-nav"> */}
        {/* <div className="nav-links">
          <a href="#" className="active">Accept Payments</a>
          <a href="#">Make Payouts</a>
          <a href="#">Start Business Banking</a>
          <a href="#">Automate Payroll</a>
          <a href="#">Credit & Loans</a> */}
        {/* </div> */}
        {/* <button className="get-started-btn">Get Started Now</button> */}
      {/* </nav> */}

      {/* Accept Payments Content */}
      <div className="accept-payments-container">
        <h2 className="accept-title">Accept Payments</h2>
        <nav className="accept-nav">
          <a href="#" className="active">Top Products</a> | <a href="#">On Website/App</a> | <a href="#">Plugins</a> | <a href="#">On Social Media</a> | <a href="#">In-Store</a> | <a href="#">Cross-border</a> | <a href="#">With Smart Add-Ons</a>
        </nav>
        
        <div className="cards-container">
          <div className="card">
            <div className="card-image-container">
              <div className="payment-methods">
                <span>💳 Pay using card</span>
                <span>📱 UPI ID</span>
                <span>🏦 Net banking</span>
                <span>📅 EMI</span>
                <span>💰 Wallet</span>
              </div>
              <img src="https://framerusercontent.com/images/PzYQcqcos30Qy4f3PfwbxMw1c.webp" alt="Payment Gateway" className="card-image" />
            </div>
            <div className="card-content">
              <h3>Payment Gateway</h3>
              <p>Offer a seamless payment experience on your website or app</p>
            </div>
            <div className="popup">
              <h4>Payment Gateway</h4>
              <p>Offer a seamless payment experience on your website or app</p>
              <div className="popup-buttons">
                <button className="sign-up-btn">Sign up Now →</button>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image-container">
              <span className="no-code-label">NO CODE</span>
              <img src="https://framerusercontent.com/images/21lqn2bUVk3xwk14e3sAVQg6Dg.webp" alt="Payment Button" className="card-image" />
            </div>
            <div className="card-content">
              <h3>Payment Button</h3>
              <p>Effortlessly add a Pay Now button without any coding required</p>
            </div>
            <div className="popup">
              <h4>Payment Button</h4>
              <p>Effortlessly add a Pay Now button without any coding required</p>
              <div className="popup-buttons">
                <button className="sign-up-btn">Sign up Now →</button>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image-container">
              <span className="no-code-label">NO CODE</span>
              <img src="https://framerusercontent.com/images/44VRINrftjdawAz1x3MyW68RE7A.webp" alt="Payment Links" className="card-image" />
            </div>
            <div className="card-content">
              <h3>Payment Links</h3>
              <p>Create and share links over email, text and accept payments instantly</p>
            </div>
            <div className="popup">
              <h4>Payment Links</h4>
              <p>Create and share links over email, text and accept payments instantly</p>
              <div className="popup-buttons">
                <button className="sign-up-btn">Sign up Now →</button>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-image-container">
              <img src="https://framerusercontent.com/images/px2Ivi9AoSqishbe7cmcCohdyI.webp" alt="Razorpay POS" className="card-image" />
            </div>
            <div className="card-content">
              <h3>Razorpay POS</h3>
              <p>Accept seamless in-store payments with India's best POS solution</p>
            </div>
            <div className="popup">
              <h4>Razorpay POS</h4>
              <p>Accept seamless in-store payments with India's best POS solution</p>
              <div className="popup-buttons">
                <button className="sign-up-btn">Sign up Now →</button>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AcceptPayments;