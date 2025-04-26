import React from 'react';
import '../styles/FinancePlatform.css';

const FinancePlatform: React.FC = () => {
  return (
    <section className="finance-platform-container">
      <h2 className="finance-heading">
        The all in one <span className="highlight">finance platform</span> you've been looking for
      </h2>
      <div className="finance-subheading">
        <span className="intro-text">With Razorpay, you can:</span>
        <ul className="finance-links">
          <li><a href="#">Accept Payments</a></li>
          <li><a href="#">Make Payouts</a></li>
          <li><a href="#">Start Business Banking</a></li>
          <li><a href="#">Automate Payroll</a></li>
          <li><a href="#">Get Credit & Loans</a></li>
        </ul>
      </div>
    </section>
  );
};

export default FinancePlatform;