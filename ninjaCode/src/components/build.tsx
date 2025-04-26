import React from 'react';
import '../styles/build.css';

const Build: React.FC = () => {
  return (
    <div className="razorpay-container">
      <div className="top-bar">
        <div className="programming-languages">
          CURL • JAVA • PYTHON • PHP • NODE.JS • CURL • JAVA • PYTHON • PHP • NODE.JS • CURL • JAVA • CURL • JAVA • PYTHON • PHP • NODE.JS • CURL
        </div>
      </div>

      <div className="hero-section">
        <h1 className="main-heading">Razorpay is built</h1>
        <h2 className="sub-heading">for developers by developers</h2>

        <div className="features-container">
          <div className="feature-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14z" />
                <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
              </svg>
            </div>
            <h3>Integrations</h3>
            <p>Find all popular platform SDKs, plugin, server integrations to our single stack.</p>
            <div className="view-docs">
              <a href="#">View Docs <span>→</span></a>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
              </svg>
            </div>
            <h3>API Reference</h3>
            <p>Comprehensive documentation to build powerful payment solutions.</p>
            <div className="view-docs">
              <a href="#">View Docs <span>→</span></a>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <h3>Webhooks</h3>
            <p>Receive real-time notifications for all payment related transactions and events.</p>
            <div className="view-docs">
              <a href="#">View Docs <span>→</span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="code-editor-section">
        <div className="try-it-section">
          <h2>Try it out</h2>
          <h3>for yourself</h3>
          <svg className="arrow-icon" viewBox="0 0 24 24" width="24" height="24">
            <path d="M20 12l-6-6v4H6v4h8v4l6-6z" fill="currentColor" />
          </svg>
        </div>

        <div className="editor-window">
          <div className="editor-header">
            <div className="language-selector">
              <span className="active-language">Curl</span>
              <span className="change-language">change language</span>
              <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
              </svg>
            </div>

            <div className="editor-controls">
              <button className="control-button copy">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button className="control-button run">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="10" fill="#FF7846" />
                </svg>
              </button>
              <button className="control-button fullscreen">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="code-editor-content">
            <div className="line-numbers">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
            </div>

            <div className="code-content">
              <div className="code-line">
                <span className="command">curl -X POST https://api.razorpay.com/v1/orders</span>
              </div>
              <div className="code-line">
                <span className="auth">-u [YOUR_KEY_ID]:[YOUR_KEY_SECRET]</span>
              </div>
              <div className="code-line">
                <span className="header">-H </span>
                <span className="string">'content-type:application/json'</span>
              </div>
              <div className="code-line">
                <span className="header">-d </span>
                <span className="string">'</span>
              </div>
              <div className="code-line">
                <span className="json">{"{"}</span>
              </div>
              <div className="code-line indent">
                <span className="json">"</span>
                <span className="key">amount</span>
                <span className="json">": </span>
                <span className="number">500</span>
                <span className="json">,</span>
              </div>
              <div className="code-line indent">
                <span className="json">"</span>
                <span className="key">currency</span>
                <span className="json">": "</span>
                <span className="string">INR</span>
                <span className="json">",</span>
              </div>
              <div className="code-line indent">
                <span className="json">"</span>
                <span className="key">receipt</span>
                <span className="json">": "</span>
                <span className="string">qwsaq1</span>
                <span className="json">",</span>
              </div>
              <div className="code-line indent">
                <span className="json">"</span>
                <span className="key">partial_payment</span>
                <span className="json">": </span>
                <span className="boolean">true</span>
                <span className="json">,</span>
              </div>
              <div className="code-line indent">
                <span className="json">"</span>
                <span className="key">first_payment_min_amount</span>
                <span className="json">": </span>
                <span className="number">230</span>
                <span className="json">,</span>
              </div>
              <div className="code-line">
                <span className="json">{"}"}</span>
              </div>
              <div className="code-line">
                <span className="string">'</span>
              </div>
              <div className="code-line">
                <span className="comment"># Example response handling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;