import React, { useState } from 'react';
import '../styles/PoweringIndustries.css';

const PoweringIndustries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('E-Commerce');
  const tabs = ['E-Commerce', 'Education', 'BFSI', 'SaaS', 'Freelancer'];

  return (
    <div className="powering-container">
      {/* Header section */}
      <div className="header-section">
        <div className="title-container">
          <h1 className="main-title">Powering every industry.</h1>
          <h1 className="main-title">Powering all disruptors.</h1>
        </div>
        
        <div className="nav-icons">
          <span className="icon">👨‍🎓</span>
          <span className="icon">🏠</span>
          <span className="icon">🏛️</span>
          <span className="icon">🎮</span>
          <span className="icon">🛍️</span>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main content section */}
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="info-card">
            <h2 className="empower-title">
              Empower your
              <br />
              <span className="green-text">e-commerce business</span>
            </h2>
            <p className="description">
              Streamline payment management with a unified dashboard,
              enabling both online and in-person payment collection while
              enhancing conversion rates and minimizing fraud.
            </p>

            <div className="partner-logos">
              <div className="logo-row">
                <span className="partner">NYKAA</span>
                <span className="partner">DECATHLON</span>
                <span className="partner">zomato</span>
                <span className="partner">Flipkart</span>
              </div>
              <p className="partners-count">+ 70,000 others</p>
            </div>

            <button className="solutions-button">
              See Solutions <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweringIndustries;