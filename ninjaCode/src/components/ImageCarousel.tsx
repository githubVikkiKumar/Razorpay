import { useState } from 'react';
import '../styles/ImageCarousel.css';

interface Founder {
  name: string;
  role: string;
  image: string;
}

export default function ImageCarousel() {
  const founders: Founder[] = [
    {
      name: "Nischay AG",
      role: "Co-founder, Jar",
      image: "https://framerusercontent.com/images/XXtHXYImkH8c2gURHS9KaHpcRE.png"
    },
    {
      name: "Aditya Shankar",
      role: "Co-founder, Doobtrust",
      image: "	https://framerusercontent.com/images/b8RImAmJQtiuIVcQKO9iL5mNlkQ.png"
    },
    {
      name: "Neha Tandon Sharma",
      role: "Founder, Isadara Life",
      image: "	https://framerusercontent.com/images/aomPDH1SlEb4126eedzyGTmcQ.png"
    },
    // {
    //   name: "Durlabh Rawat",
    //   role: "Founder, Barosi",
    //   image: "/api/placeholder/300/300"
    // },
    // {
    //   name: "Nikita Gujral",
    //   role: "Founder, AI-Fabulous",
    //   image: "/api/placeholder/300/300"
    // },
    // {
    //   name: "Anusree Goenka",
    //   role: "Co-founder, Spark Studio",
    //   image: "/api/placeholder/300/300"
    // }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-header">
          <h1 className="carousel-title">
            Razorpay grows with <span className="blue-text">you!</span>
          </h1>
          <div className="business-count">
            1,50,000+ Businesses
          </div>
        </div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>

        <div className="warning-section">
          <div className="warning-content">
            <div className="warning-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div>
              <p className="warning-text">
                To the fullest extent permitted by law, Razorpay Software Private Limited, its affiliates, and each of their respective officers, directors, members, employees, and agents ("Razorpay") NEVER ask you or any individual to share their personal or financial details for the purpose of any investments, trading, employment or any other related or incidental activity. It has recently come to our attention that some unknown individuals are reaching out to gullible people through WhatsApp, Telegram...
                <button className="read-more-btn">Read more</button>
              </p>
              <button className="support-btn">
                Support
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-icon">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="founder-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`founder-image-container ${isHovered ? 'hovered' : ''}`}>
        <img 
          src={founder.image} 
          alt={founder.name}
          className="founder-image"
        />
      </div>
      <div className="founder-info">
        <h3 className="founder-name">{founder.name}</h3>
        <p className="founder-role">{founder.role}</p>
      </div>
    </div>
  );
}