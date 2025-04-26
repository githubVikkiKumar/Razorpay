import React from 'react';
import '../styles/InnovationCards.css';

const InnovationCards: React.FC = () => {
  return (
    <section className="innovation-section">
      <div className="container">
        <h2 className="innovation-heading">We have innovated at every instance, creating a disruption.</h2>
        
        <div className="cards-wrapper">
          {/* MoneySaver Export Account Card */}
          <div className="innovation-card moneysaver-card">
            <div className="card-header">
              <span className="card-label">MoneySaver Export Account</span>
              <span className="card-icon">🌐</span>
            </div>
            
            <div className="card-content">
              <h3 className="card-title">
                <span className="highlight">Open a virtual account in 200+ countries,</span> save up to 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments
              </h3>
              
              <p className="card-description">
                Receive international wire transfers with ease with a smart account
              </p>
              
              <div className="card-actions">
                <button className="btn btn-primary">Sign Up <span className="arrow">→</span></button>
                <button className="btn btn-text">Know More</button>
              </div>
            </div>
          </div>
          
          {/* Turbo UPI Card */}
          <div className="innovation-card turbo-upi-card">
            <div className="card-header">
              <span className="card-label">Turbo UPI</span>
              <span className="card-icon">⚡</span>
            </div>
            
            <div className="card-content">
              <h3 className="card-title">
                <span className="highlight">Experience a 5X faster checkout,</span> achieve a 10% success rate boost, all without any redirections to UPI apps.
              </h3>
              
              <div className="arrow-circle">
                <span className="arrow">→</span>
              </div>
              
              <p className="card-description">
                Get India's fastest one-step UPI payment solution for businesses
              </p>
              
              <div className="card-actions">
                <button className="btn btn-primary">Sign Up <span className="arrow">→</span></button>
                <button className="btn btn-text">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default InnovationCards;