import React, { useState } from 'react';
import resumeImage from '../image/Me3.jpg';
import portfolioImage from '../image/Me1.jpg';
import projectsImage from '../image/Me2.jpg';
import './Content.css';
import GameStyleMenu from './GameStyleMenu';

const contentData = {
  resume: {
    title: "Contact Information",
    description: [
      <p>Email: Contact me via email for inquiries and communication.</p>,
      <p>Cellphone: Reach me on my mobile phone for calls and text messages.</p>,
      <p>"Address: Serving as a point of reference for meetings or correspondence."</p>
      ],
    tabs: {
      general: {
        title: "General Info",
        details: [
          "scottmanchesterjames@gmail.com",
          "Phone Number: 315-681-0918",
          "8513 Chippendale Cir, Manlius, NY 13104"
        ],
      },
    },
  },
  portfolio: {
    title: "Disclaimer",
    description: "Thank you for viewing",
    tabs: {
      job1: {
        title: "Disclaimer",
        details: [
          "My website aims to provide the most up-to-date information about myself, including finished, current and ongoing education, experience and projects. I understand, though, that mistakes can happen. Feel free to reach out if you run into any inaccuracies, have suggestions for improvements, or just want to connect. Thanks for your feedback, and I look forward to interacting with you.",
        ],
      },
    },
  },
};

const HomeContent = () => {
  const [activeContent, setActiveContent] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  const handleButtonClick = (contentKey) => {
    setActiveContent(contentKey);
  };

  const handleCloseMenu = () => {
    setActiveContent('');
  };

  return (
    <div className="content-area">
      <div className="left-content">
        <div className="button-container" onClick={() => handleButtonClick('resume')}>
          <div className="text-top">Contact Information</div>
          <img src={resumeImage} alt="Resume" />
          <div className="text-bottom">Click to View</div>
        </div>
      </div>
      
      <div className="right-content">
        <div className="button-container" onClick={() => handleButtonClick('portfolio')}>
          <div className="text-top">Additional Information</div>
          <img src={portfolioImage} alt="Portfolio" />
          <div className="text-bottom">Click to View</div>
        </div>
      </div>
      {activeContent && (
        <GameStyleMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          content={contentData[activeContent]}
          onClose={handleCloseMenu}
        />
      )}
    </div>
  );
};

export default HomeContent;