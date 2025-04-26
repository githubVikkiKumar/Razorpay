import React, { useState, useRef, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isPaymentsDropdownOpen, setIsPaymentsDropdownOpen] = useState(false);
  const [isBankingDropdownOpen, setIsBankingDropdownOpen] = useState(false);
  const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const paymentsDropdownRef = useRef<HTMLDivElement>(null);
  const bankingDropdownRef = useRef<HTMLDivElement>(null);
  const payrollDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const paymentsRef = useRef<HTMLLIElement>(null);
  const bankingRef = useRef<HTMLLIElement>(null);
  const payrollRef = useRef<HTMLLIElement>(null);
  const resourcesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isPaymentsDropdownOpen && paymentsDropdownRef.current && paymentsRef.current) {
      const paymentsRect = paymentsRef.current.getBoundingClientRect();
      paymentsDropdownRef.current.style.left = `${paymentsRect.left - 200}px`; // Adjust position dynamically
      paymentsDropdownRef.current.style.top = `${paymentsRect.bottom + window.scrollY}px`;
    }
  }, [isPaymentsDropdownOpen]);

  useEffect(() => {
    if (isBankingDropdownOpen && bankingDropdownRef.current && bankingRef.current) {
      const bankingRect = bankingRef.current.getBoundingClientRect();
      bankingDropdownRef.current.style.left = `${bankingRect.left - 200}px`; // Adjust position dynamically
      bankingDropdownRef.current.style.top = `${bankingRect.bottom + window.scrollY}px`;
    }
  }, [isBankingDropdownOpen]);

  useEffect(() => {
    if (isPayrollDropdownOpen && payrollDropdownRef.current && payrollRef.current) {
      const payrollRect = payrollRef.current.getBoundingClientRect();
      payrollDropdownRef.current.style.left = `${payrollRect.left - 200}px`; // Adjust position dynamically
      payrollDropdownRef.current.style.top = `${payrollRect.bottom + window.scrollY}px`;
    }
  }, [isPayrollDropdownOpen]);

  useEffect(() => {
    if (isResourcesDropdownOpen && resourcesDropdownRef.current && resourcesRef.current) {
      const resourcesRect = resourcesRef.current.getBoundingClientRect();
      resourcesDropdownRef.current.style.left = `${resourcesRect.left - 200}px`; // Adjust position dynamically
      resourcesDropdownRef.current.style.top = `${resourcesRect.bottom + window.scrollY}px`;
    }
  }, [isResourcesDropdownOpen]);

  return (
    <nav className="w-full bg-white py-4 px-8 flex justify-between items-center shadow-sm">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-10">
        <img
          src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg"
          alt="Razorpay Logo"
          className="h-6"
        />

        <ul className="hidden md:flex gap-6 text-[#1a1a1a] text-sm font-medium">
          {/* Payments with Dropdown */}
          <li
            ref={paymentsRef}
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setIsPaymentsDropdownOpen(true)}
            onMouseLeave={() => setIsPaymentsDropdownOpen(false)}
          >
            Payments
            {isPaymentsDropdownOpen && (
              <div ref={paymentsDropdownRef} className="dropdown-menu">
                {/* Accept Payments Online */}
                <div className="dropdown-section">
                  <h4>Accept Payments Online</h4>
                  <ul>
                    <li>
                      <span className="icon">💳</span> Payment Aggregator
                      <p>Accepting payments made easy for businesses</p>
                    </li>
                    <li>
                      <span className="icon">🌐</span> Payment Gateway
                      <p>Payments on your Web & App</p>
                    </li>
                    <li>
                      <span className="icon">🔗</span> Payment Links
                      <p>Create & send links to collect money</p>
                    </li>
                    <li>
                      <span className="icon">📄</span> Payment Pages
                      <p>Get paid with personalized page</p>
                    </li>
                    <li>
                      <span className="icon">🖱️</span> Payment Buttons
                      <p>Create, Copy and Collect in 5 mins</p>
                    </li>
                    <li>
                      <span className="icon">📷</span> QR Codes
                      <p>Multi-feature QR for your business</p>
                    </li>
                  </ul>
                </div>

                {/* Accept Payments Offline */}
                <div className="dropdown-section">
                  <h4>Accept Payments Offline</h4>
                  <ul>
                    <li>
                      <span className="icon">⚡</span> Instant Settlement
                      <p>Customer payments settled faster</p>
                    </li>
                    <li>
                      <span className="icon">🛒</span> Magic Checkout <span className="new-label">NEW</span>
                      <p>Improve Order Conversion & Reduce RTOs</p>
                    </li>
                    <li>
                      <span className="icon">💸</span> Smart Collect 2.0
                      <p>Automate NEFT, RTGS, IMPS payments</p>
                    </li>
                    <li>
                      <span className="icon">🔄</span> Subscriptions
                      <p>Collect recurring subscription payments</p>
                    </li>
                    <li>
                      <span className="icon">🌍</span> International Payments
                      <p>Accept payments from across the globe</p>
                    </li>
                    <li>
                      <span className="icon">🛠️</span> Embedded Payments
                      <p>End-to-end payments stack for Platforms</p>
                    </li>
                  </ul>
                </div>

                {/* Partner Apps */}
                <div className="dropdown-section">
                  <h4>Partner Apps</h4>
                  <ul>
                    <li>
                      <span className="icon">💬</span> Payments on WhatsApp <span className="new-label">NEW</span>
                      <p>Accept payments within WhatsApp chat</p>
                    </li>
                    <li>
                      <span className="icon">⚙️</span> Optimizer <span className="new-label">NEW</span>
                      <p>Manage multiple payment gateways</p>
                    </li>
                  </ul>
                </div>

                {/* With Power Add Ons */}
                <div className="dropdown-section">
                  <h4>With Power Add Ons</h4>
                  <ul>
                    <li>
                      <span className="icon">📱</span> App Store
                      <p>Find right app for your business</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Banking+ with Dropdown */}
          <li
            ref={bankingRef}
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setIsBankingDropdownOpen(true)}
            onMouseLeave={() => setIsBankingDropdownOpen(false)}
          >
            Banking+
            {isBankingDropdownOpen && (
              <div ref={bankingDropdownRef} className="dropdown-menu">
                {/* Banking Solutions */}
                <div className="dropdown-section">
                  <h4>Banking Solutions</h4>
                  <ul>
                    <li>
                      <span className="icon">🏦</span> Current Account
                      <p>Digital business account with benefits</p>
                    </li>
                    <li>
                      <span className="icon">📊</span> Capital
                      <p>Fast & flexible business loans</p>
                    </li>
                    <li>
                      <span className="icon">💰</span> Corporate Credit Card <span className="new-label">NEW</span>
                      <p>Premium cards with exclusive benefits</p>
                    </li>
                    <li>
                      <span className="icon">💸</span> Payouts
                      <p>Send money to customers or vendors</p>
                    </li>
                  </ul>
                </div>

                {/* Digital Banking */}
                <div className="dropdown-section">
                  <h4>Digital Banking</h4>
                  <ul>
                    <li>
                      <span className="icon">🔄</span> Auto-reconciliation
                      <p>Automatically match payments to invoices</p>
                    </li>
                    <li>
                      <span className="icon">🏆</span> Banking Premium <span className="new-label">NEW</span>
                      <p>Enhanced banking features for businesses</p>
                    </li>
                    <li>
                      <span className="icon">⚡</span> InstantFX
                      <p>Fast international money transfers</p>
                    </li>
                  </ul>
                </div>

                {/* Business Tools */}
                <div className="dropdown-section">
                  <h4>Business Tools</h4>
                  <ul>
                    <li>
                      <span className="icon">📱</span> Banking Mobile App
                      <p>Manage your banking on the go</p>
                    </li>
                    <li>
                      <span className="icon">📈</span> Expense Management
                      <p>Track and control business expenses</p>
                    </li>
                    <li>
                      <span className="icon">🔍</span> Reporting Dashboard
                      <p>Comprehensive financial insights</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Payroll with Dropdown */}
          <li
            ref={payrollRef}
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setIsPayrollDropdownOpen(true)}
            onMouseLeave={() => setIsPayrollDropdownOpen(false)}
          >
            Payroll
            {isPayrollDropdownOpen && (
              <div ref={payrollDropdownRef} className="dropdown-menu">
                {/* Payroll Title */}
                <div className="dropdown-section payroll-header">
                  <h4>PAYROLL</h4>
                </div>
                
                {/* Business Types */}
                <div className="dropdown-section">
                  <ul>
                    <li>
                      <span className="icon">🚀</span> For Startups & SMEs
                      <p>Perfect payroll solution for growing businesses</p>
                    </li>
                    <li>
                      <span className="icon">🏢</span> For Enterprises <span className="new-label">NEW</span>
                      <p>Enterprise-grade payroll management system</p>
                    </li>
                  </ul>
                </div>

                {/* Payroll Features */}
                <div className="dropdown-section">
                  <h4>Payroll Solutions</h4>
                  <ul>
                    <li>
                      <span className="icon">💼</span> Salary Disbursement
                      <p>Automated and timely salary payments</p>
                    </li>
                    <li>
                      <span className="icon">📝</span> Compliance Management
                      <p>Automate tax filings and compliance</p>
                    </li>
                    <li>
                      <span className="icon">📊</span> Attendance Tracking
                      <p>Track attendance and manage leaves</p>
                    </li>
                    <li>
                      <span className="icon">🔔</span> Reimbursements <span className="new-label">NEW</span>
                      <p>Quick and efficient expense reimbursements</p>
                    </li>
                  </ul>
                </div>

                {/* Additional Tools */}
                <div className="dropdown-section">
                  <h4>Additional Tools</h4>
                  <ul>
                    <li>
                      <span className="icon">📱</span> Employee Self-Service Portal
                      <p>Employee access to payslips and tax documents</p>
                    </li>
                    <li>
                      <span className="icon">📈</span> Payroll Analytics
                      <p>Comprehensive insights into payroll data</p>
                    </li>
                    <li>
                      <span className="icon">🔄</span> Integration with HRMS
                      <p>Seamless connection with your HR systems</p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-blue-600">Engage</li>
          <li className="cursor-pointer hover:text-blue-600">Partners</li>
          
          {/* Resources with Dropdown */}
          <li
            ref={resourcesRef}
            className="cursor-pointer hover:text-blue-600 relative"
            onMouseEnter={() => setIsResourcesDropdownOpen(true)}
            onMouseLeave={() => setIsResourcesDropdownOpen(false)}
          >
            Resources
            {isResourcesDropdownOpen && (
              <div ref={resourcesDropdownRef} className="dropdown-menu">
                {/* Resources Columns */}
                <div className="dropdown-grid">
                  {/* AWARENESS Column */}
                  <div className="dropdown-column">
                    <h4>AWARENESS</h4>
                    <ul>
                      <li>
                        <span className="icon">📝</span> Blog
                        <p>Insights and updates from Razorpay</p>
                      </li>
                      <li>
                        <span className="icon">🎓</span> Learn
                        <p>Educational resources and guides</p>
                      </li>
                      <li>
                        <span className="icon">📅</span> Events
                        <p>Webinars, workshops and conferences</p>
                      </li>
                      <li>
                        <span className="icon">📄</span> White Papers
                        <p>In-depth research and analysis</p>
                      </li>
                      <li>
                        <span className="icon">👥</span> Customer Stories
                        <p>Success stories from our customers</p>
                      </li>
                    </ul>
                  </div>

                  {/* DEVELOPERS Column */}
                  <div className="dropdown-column">
                    <h4>DEVELOPERS</h4>
                    <ul>
                      <li>
                        <span className="icon">📚</span> Developer Docs
                        <p>Comprehensive documentation for developers</p>
                      </li>
                      <li>
                        <span className="icon">🔌</span> Integrations
                        <p>Connect with popular platforms and services</p>
                      </li>
                      <li>
                        <span className="icon">🔍</span> API Reference
                        <p>Detailed API documentation and examples</p>
                      </li>
                      <li>
                        <span className="icon">🎮</span> API Playground
                        <p>Test and experiment with our APIs</p>
                      </li>
                      <li>
                        <span className="icon">🚀</span> Onboarding APIs
                        <p>APIs for seamless customer onboarding</p>
                      </li>
                    </ul>
                  </div>

                  {/* SOLUTIONS Column */}
                  <div className="dropdown-column">
                    <h4>SOLUTIONS</h4>
                    <ul>
                      <li>
                        <span className="icon">⚙️</span> SaaS
                        <p>Solutions for Software-as-a-Service businesses</p>
                      </li>
                      <li>
                        <span className="icon">🛒</span> E-Commerce
                        <p>Streamline online store payments</p>
                      </li>
                      <li>
                        <span className="icon">🎓</span> Education
                        <p>Payment solutions for educational institutions</p>
                      </li>
                      <li>
                        <span className="icon">🏦</span> BFSI
                        <p>Banking, Financial Services, and Insurance solutions</p>
                      </li>
                      <li>
                        <span className="icon">💼</span> Freelance
                        <p>Tools for independent professionals</p>
                      </li>
                    </ul>
                  </div>

                  {/* FREE TOOLS Column */}
                  <div className="dropdown-column">
                    <h4>FREE TOOLS</h4>
                    <ul>
                      <li>
                        <span className="icon">🧮</span> GST Calculator
                        <p>Calculate GST for your transactions</p>
                      </li>
                      <li>
                        <span className="icon">💰</span> Online TDS Payment
                        <p>Easy TDS payment processing</p>
                      </li>
                      <li>
                        <span className="icon">🔢</span> GST Number Search
                        <p>Verify GST registration numbers</p>
                      </li>
                      <li>
                        <span className="icon">🔍</span> GST Search by PAN
                        <p>Find GST details using PAN</p>
                      </li>
                      <li>
                        <span className="icon">📊</span> ROI Calculator <span className="new-label">NEW</span>
                        <p>Calculate return on investment</p>
                      </li>
                      <li>
                        <span className="icon">📈</span> CAGR Calculator <span className="new-label">NEW</span>
                        <p>Compound Annual Growth Rate calculator</p>
                      </li>
                      <li>
                        <span className="icon">💹</span> EBITDA Calculator <span className="new-label">NEW</span>
                        <p>Calculate earnings before interest, taxes, depreciation</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        </ul>
      </div>

      {/* Right: Support + Flag + Buttons */}
      <div className="flex items-center gap-4">
        {/* Support icon */}
        <img
          src="https://img.icons8.com/ios-filled/24/000000/customer-support.png"
          alt="Support"
          className="w-5 h-5"
        />

        {/* Flag with dropdown */}
        <div className="flex items-center gap-1">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="h-4 w-6"
          />
          <svg
            className="w-3 h-3 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Login */}
        <button className="text-blue-600 border border-blue-600 px-4 py-1.5 rounded text-sm hover:bg-blue-50">
          Login
        </button>

        {/* Sign Up */}
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;