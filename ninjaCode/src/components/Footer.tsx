// Footer.tsx

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Column 1 - Logo and Description */}
          <div className="footer-column logo-column">
            <div className="footer-logo">
              <img src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="Razorpay" className="logo-img" />
            </div>
            <p className="footer-description">
              Razorpay is the only payments solution in India that allows businesses
              to accept, process and disburse payments with its product suite. It gives
              you access to all payment modes including credit card, debit card, netbanking,
              UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge,
              Ola Money and PayZapp.
            </p>
            <p className="footer-description">
              RazorpayX supercharges your business banking experience, bringing effectiveness,
              efficiency, and excellence to all financial processes. With RazorpayX, businesses
              can manage payouts, collect payments and get better financial insights.
            </p>
            <p className="footer-description">
              The Razorpay Flash Checkout is an embeddable, PCI DSS compliant checkout form
              that lets customers make payments on your website with minimal clicks.
            </p>
            <p className="footer-description">
              Razorpay APIs are easy to integrate, well-documented with clear, functional
              descriptions of arguments and responses. It is developer-centric, enabling businesses
              to develop on any stack with REST APIs, library support, SDKs and plugins.
            </p>
            <div className="footer-badges">
              <img src="https://framerusercontent.com/images/sNVWj829o3oF8qReWcrueg25c.png" alt="PCI DSS" className="badge-img" />
              <img src="https://framerusercontent.com/images/UrSNYwLfIXGxYMz28fjhYx3c.png" alt="ISO" className="badge-img" />
              <img src="https://framerusercontent.com/images/BFa4BpSMTtV62RfYefCwfM5mL0w.png" alt="Certification" className="badge-img" />
            </div>
          </div>

          {/* Column 2 - Accept Payments */}
          <div className="footer-column">
            <h3 className="column-title">ACCEPT PAYMENTS</h3>
            <ul className="footer-links">
              <li><a href="#">Payment Gateway</a></li>
              <li><a href="#">Payment Pages</a></li>
              <li><a href="#">Payment Links</a></li>
              <li><a href="#">QR Codes</a></li>
              <li><a href="#">Payment Links - API</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Route</a></li>
              <li><a href="#">Invoices</a></li>
              <li><a href="#">Smart Collect</a></li>
              <li><a href="#">Optimizer</a></li>
            </ul>
          </div>

          {/* Column 3 - Banking Plus */}
          <div className="footer-column">
            <h3 className="column-title">BANKING PLUS</h3>
            <ul className="footer-links">
              <li><a href="#">RazorpayX</a></li>
              <li><a href="#">Current Account</a></li>
              <li><a href="#">Payouts</a></li>
              <li><a href="#">Payout Links</a></li>
              <li><a href="#">Corporate Credit Card</a></li>
              <li><a href="#">UPI Autopay</a></li>
              <li><a href="#">View All</a></li>
            </ul>
            <h3 className="column-title">LENDING</h3>
            <ul className="footer-links">
              <li><a href="#">Razorpay Capital</a></li>
              <li><a href="#">Instant Settlements</a></li>
              <li><a href="#">Line of Credit</a></li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="footer-column">
            <h3 className="column-title">RESOURCES</h3>
            <ul className="footer-links">
              <li><a href="#">BECOME A PARTNER</a></li>
              <li><a href="#">DEVELOPER GUIDE</a></li>
              <li><a href="#">API REFERENCE</a></li>
              <li><a href="#">KNOWLEDGE BASE</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CUSTOMER STORIES</a></li>
            </ul>
            <h3 className="column-title">SOLUTIONS</h3>
            <ul className="footer-links">
              <li><a href="#">EDUCATION</a></li>
              <li><a href="#">ECOMMERCE</a></li>
              <li><a href="#">SAAS</a></li>
              <li><a href="#">BFSI</a></li>
              <li><a href="#">MARKET PLACE</a></li>
            </ul>
          </div>

          {/* Column 5 - Company */}
          <div className="footer-column">
            <h3 className="column-title">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">Responsible Disclosure</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">White Papers</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>

          {/* Column 6 - Contact Us */}
          <div className="footer-column">
            <h3 className="column-title">CONTACT US</h3>
            <ul className="footer-links contact-links">
              <li><a href="#" className="social-icon facebook-icon">Facebook</a></li>
              <li><a href="#" className="social-icon twitter-icon">Twitter</a></li>
              <li><a href="#" className="social-icon instagram-icon">Instagram</a></li>
              <li><a href="#" className="social-icon linkedin-icon">LinkedIn</a></li>
              <li><a href="#" className="social-icon github-icon">GitHub</a></li>
            </ul>
            <p>Razorpay Support: <br />
            support@razorpay.com</p>
            <p>For Grievance Officer: <br />
            grievance@razorpay.com</p>
            <h3 className="column-title">LOCATIONS</h3>
            <ul className="footer-links">
              <li><a href="#">Bengaluru</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">New Delhi</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Pune</a></li>
              <li><a href="#">Kolkata</a></li>
              <li><a href="#">Ahmedabad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Payment operations powered by Razorpay Software Private Limited (CIN: U72200KA2013PTC097389) | GST: 29AAHCR2627L1ZU | PAN: AAHCR2627L | Registered Address</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;