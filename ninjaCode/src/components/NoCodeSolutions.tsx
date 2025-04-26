import React from 'react';
import '../styles/NoCodeSolutions.css';

// Icons as functional components
const LinkIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13C11.1046 13 12 12.1046 12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11C8 12.1046 8.89543 13 10 13Z" fill="#3B82F6"/>
    <path d="M18.5 13C19.6046 13 20.5 12.1046 20.5 11C20.5 9.89543 19.6046 9 18.5 9C17.3954 9 16.5 9.89543 16.5 11C16.5 12.1046 17.3954 13 18.5 13Z" fill="#3B82F6"/>
    <path d="M15 8.5L13.5 13.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5.5 13C6.60457 13 7.5 12.1046 7.5 11C7.5 9.89543 6.60457 9 5.5 9C4.39543 9 3.5 9.89543 3.5 11C3.5 12.1046 4.39543 13 5.5 13Z" fill="#3B82F6"/>
  </svg>
);

const PageIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#3B82F6"/>
    <path d="M7 7H17V9H7V7Z" fill="#3B82F6"/>
    <path d="M7 11H17V13H7V11Z" fill="#3B82F6"/>
    <path d="M7 15H14V17H7V15Z" fill="#3B82F6"/>
  </svg>
);

const ButtonIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#3B82F6" strokeWidth="2"/>
    <path d="M7 12H17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33337 8H12.6667" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface NoCodeCardProps {
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
}

const NoCodeCard: React.FC<NoCodeCardProps> = ({ title, icon, description }) => {
  return (
    <div className="no-code-card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="icon-container">{icon}</div>
      </div>
      <div className="card-content">
        {description}
      </div>
      <div className="card-footer">
        <a href="#" className="sign-up-link">
          Sign Up <ArrowIcon />
        </a>
        <a href="#" className="know-more-link">
          Know More <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

const NoCodeSolutions: React.FC = () => {
  return (
    <div className="no-code-container">
      <div className="no-code-header">
        <h2 className="subtitle">Not a developer?</h2>
        <h1 className="title">Our No-Code products have you covered</h1>
      </div>
      
      <div className="no-code-cards">
        <NoCodeCard 
          title="Payment Links"
          icon={<LinkIcon />}
          description={
            <>
              Accept payments instantly: <br />
              <a href="#" className="text-link">Share links</a> via email, text, or social.
            </>
          }
        />
        
        <NoCodeCard 
          title="Payment Pages"
          icon={<PageIcon />}
          description={
            <>
              Accept payments without <br />
              <a href="#" className="text-link">coding on a custom-branded store</a>
            </>
          }
        />
        
        <NoCodeCard 
          title="Payment Buttons"
          icon={<ButtonIcon />}
          description={
            <>
              Effortlessly <a href="#" className="text-link">add a Pay Now button</a> without any coding knowledge
            </>
          }
        />
      </div>
    </div>
  );
};

export default NoCodeSolutions;