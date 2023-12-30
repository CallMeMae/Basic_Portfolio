import React, { useState } from 'react';
import resumeImage from '../image/Proj1.png';
import portfolioImage from '../image/Proj2.png';
import projectsImage from '../image/Proj3.png';
import project4Image from '../image/Proj4.jpg';
import './Content.css';
import GameStyleMenu from './GameStyleMenu';

const contentData = {
  project1: {
    title: "Choose Your Adventure (C++)",
    description:
      "Designed and coded a text-based choose-your-own-adventure game in C++. Players navigate through a fantasy world, make decisions, encounter enemies, and engage in turn-based combat. Features character attributes, quests, and a store.",
    tabs: {
      general: {
        title: "Choose Your Adventure (C++)",
        details: [
          "Please find a download link below"
        ],
      },
    },
    downloadLink: {
      label: "Download",
      link: "https://drive.google.com/file/d/1IXaXKc5xDZikd4hVB3lUXsrJ4yccGLjh/view?usp=sharing"
    },
  },
  project2: {
    title: "Guess The Number (Java)",
    description: "Developed a number guessing game in Java with a limited number of attempts, random number generation, and player interaction. Implemented features such as betting, hints, and encounters with a Coin Goblin.",
    tabs: {
      general: {
        title: "Guess The Number (Java)",
        details: [
          "Please find a download link below",
        ],
      },
    },
    downloadLink: {
      label: "Download",
      link: "https://drive.google.com/file/d/1IXaXKc5xDZikd4hVB3lUXsrJ4yccGLjh/view?usp=sharing"
    },
  },
  project3: {
    title: "ATM Withdrawal (JavaScript)",
    description: "Created an ATM withdrawal script in JavaScript that allows users to input the desired withdrawal amount, checks account balance, and dispenses cash if sufficient funds are available. Includes error handling for invalid inputs.",
    tabs: {
      general: {
        title: "ATM Withdrawal (JavaScript)",
        details: [
          "Please find a download link below",
        ],
      },
    },
    downloadLink: {
      label: "Download ",
      link: "https://drive.google.com/file/d/1IXaXKc5xDZikd4hVB3lUXsrJ4yccGLjh/view?usp=sharing"
    },
},
project4: {
    title: "Resume Generator (Python)",
    description: "Developed a Python script to generate resumes based on user-provided information. Users input their personal details, education, work experience, skills, and achievements. The script formats and outputs a professional resume.",
    tabs: {
      general: {
        title: "Resume Generator (Python)",
        details: [
          "Please find a download link below",
        ],
      },
    },
    downloadLink: {
      label: "Download",
      link: "https://drive.google.com/file/d/1IXaXKc5xDZikd4hVB3lUXsrJ4yccGLjh/view?usp=sharing"
    },
 },
}

const PlayContent = () => {
  const [activeContent, setActiveContent] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  const contentClickHandler = (contentKey) => {
    setActiveContent(contentKey);
  };

  const closeMenuHandler = () => {
    setActiveContent('');
  };

  return (
    <div className="content-area">
      <div className="left-content">
        <div className="button-container" onClick={() => contentClickHandler('project1')}>
          <div className="text-top">Project 1</div>
          <img src={resumeImage} alt="Project1" />
          <div className="text-bottom">Click to View</div>
        </div>
      </div>

      <div className="right-content">
        <div className="button-container" onClick={() => contentClickHandler('project2')}>
          <div className="text-top">Project 2</div>
          <img src={portfolioImage} alt="Project2" />
          <div className="text-bottom">Click to View</div>
        </div>

        <div className="button-container" onClick={() => contentClickHandler('project3')}>
          <div className="text-top">Project 3</div>
          <img src={projectsImage} alt="Project3" />
          <div className="text-bottom">Click to View</div>
        </div>

        <div className="button-container" onClick={() => contentClickHandler('project4')}>
          <div className="text-top">Project 4</div>
          <img src={project4Image} alt="Project4" />
          <div className="text-bottom">Click to View</div>
        </div>
      </div>

      {activeContent && (
        <GameStyleMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          content={contentData[activeContent]}
          onClose={closeMenuHandler}
        />
      )}
    </div>
  );
};

export default PlayContent;