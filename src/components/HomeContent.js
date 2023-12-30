import React, { useState } from 'react';
import resumeImage from '../image/Me3.jpg';
import portfolioImage from '../image/College1.png';
import projectsImage from '../image/Classroom1.png';
import './Content.css';
import GameStyleMenu from './GameStyleMenu';

const contentData = {
  resume: {
    title: "About My Life",
    description:
      "Here's a brief overview of my life, including my personal journey, the tools and skills I've acquired, and my life experiences.",
    tabs: {
      general: {
        title: "General Info",
        details: [
          "Originally from Sandy Creek, New York, where I grew up amid the distinct four seasons and a close-knit community vibe.",
          "As a 25-year-old, I'm at the end of a quarter century of learning and the beginning of an adult journey.",
          "My commitment to broadening my horizons through communication has been a driving force behind my bilingual development; I'm fluent in English and can navigate conversations in Japanese.",
          "It's been a 7-year journey of continuous learning, problem-solving, and creativity for me. Innovation and technology are more than just a career path for me.",
          "I love teaching English to newcomers in the United States as a hobby. Besides helping them transition to a new life, this altruistic endeavor enriches my understanding of diverse cultures.",
          "Helping people goes beyond my hobby; it's who I am. My goal is to make a positive impact on those around me, whether it's through mentorship or community service.",
          "My life is an open book of curiosity, a never-ending quest for knowledge, and a deep desire to make a difference through coding and volunteering.",
        ],
      },
      story: {
        title: "My Journey",
        details: [
          "Until the age of 18, I spent my early years in Sandy Creek, soaking up the rich, rural experiences and community spirit.",
          "At 18, I enrolled at the Massachusetts Institute of Technology, one of the world's top universities known for its rigorous academic environment and innovative technology.",
          "During that same time, I enlisted in the Army, demonstrating my commitment to service and discipline. It was a pivotal decision that kicked off six years of significant changes in my life.",
          "As a military member, I served until the age of 24, during which time I developed values such as resilience, leadership, and teamwork. This period of time has undoubtedly shaped the person I am today through the experiences and skills I gained.",
          "During my service, I continued academics, this time at Southern New Hampshire University (SNHU), where I will graduate at 25, I am pursuing my degree. My personal narrative combines military precision with academic excellence.",
        ],
      },
      weapons: {
        title: "Skills & Tools",
        details: [
          "Over seven years, I've developed my coding skills, starting with self-study and advancing through formal education to master complex concepts and industry standards.",
          "I'm proficient in Java, C/C++, and Python, enabling me to build robust software and tackle server-side development.",
          "My web development expertise includes HTML, CSS, JavaScript, and frameworks like Next.js, React.js, and Three.js for creating engaging websites.",
          "I design responsive user interfaces using Bootstrap and produce enhanced digital content with tools like Photoshop, Illustrator, and InDesign.",
          "My experience in game development is reflected in my use of Unreal Engine and Unity, complemented by 3D modeling skills with Maya 3D, Blender, and Autodesk 3ds Max.",
          "Additionally, I'm adept in SQL, mobile app development with Swift and Kotlin, and version control using Git.",
          "I'm conversant with Docker, Node.js, Angular, Ruby on Rails, and cloud platforms including AWS, Azure, and Google Cloud Platform.",
        ]
      },
      experience: {
        title: "Life Experience",
        details: [
          "With HTML, CSS, and JavaScript, I designed a portfolio website showcasing my projects and skills.",
          "Active volunteer at the local soup kitchen, and church, coordinating children's activities and contributing to the safety and wellbeing of the community.",
          "My experience as a military squad leader enabled me to develop my leadership and teamwork skills under high pressure.",
          "Exceptional ability to adapt quickly to changing information and tools.",
          "Cross-country and track runner who has been recognized for outstanding athletic performance and for embodying teamwork and endurance.",
          "Attained honor roll status consistently throughout college, demonstrating a commitment to academic excellence and intellectual rigor.",
          "Embrace the philosophy of Kaizen, continually seeking self-improvement and personal growth, which fuels my passion for lifelong learning.",
          "As part of my future plans, I intend to travel internationally to further my language skills and cultural awareness.",
        ],
      },
    },
  },
  portfolio: {
    title: "Professional Experience",
    description: "A summary of my professional experiences, roles I've held, and projects I've contributed to.",
    tabs: {
      job1: {
        title: "Lockheed Martin",
        details: [
          "East Syracuse, NY — Computer Engineer | November 2019 - November 2021",
          "Collaborated in a cross-functional team to deliver software solutions for aerospace and defense technology projects.",
          "Engaged in the full software development lifecycle, from concept to deployment, for mission-critical systems at Lockheed Martin.",
          "Developed software using C++, showcasing proficiency in a key programming language.",
          "Implemented effective software practices and configuration management, enhancing system reliability and efficiency."
        ],
      },
      job2: {
        title: "Brystol-Myers Squibb",
        details: [
          "Brystol-Myers Squibb — Biologics Operator | January 2018 - November 2019",
          "Regularly collected and analyzed laboratory samples to ensure product quality and integrity during manufacturing.",
          "Collaborated with quality assurance teams to monitor and improve product consistency and safety.",
          "Utilized specialized equipment and techniques for biologic compound production in a controlled environment.",
          "Maintain high safety and quality standards in line with international pharmaceutical production guidelines.",
          "Played a key role in maintaining a contamination-free environment for sensitive biologic compound production."
        ],
      },
      job3: {
        title: "United States Army",
        details: [
          "Led and mentored a team of combat engineers as a squad leader, excelling in high-pressure environments.",
          "Ensured operational readiness of heavy equipment through meticulous maintenance and management."
        ],
      },
    },
  },
  projects: {
    title: "Professional Education",
    description: "My educational background with details about my college, secondary, and primary studies.",
    tabs: {
      college: {
        title: "College Education",
        details: [
          "Massachusetts Institute of Technology, New Hampshire — Software Engineering",
          "January 2017 - January 2018 | 3.9 GPA",
          "Started at MIT in January 2017, then pivoted to a military career, leading me to Southern New Hampshire University's flexible online programs.",
          "Southern New Hampshire University, New Hampshire — Software Engineering",
          "January 2018 - August 2024 | 3.7 GPA",
          "Balancing an online software engineering degree, aiming to complete it by August 2024."
        ]
      },
      technical: {
        title: "Secondary Studies",
        details: [
          "Center for Instruction Technology & Innovation — Graphic Design",
          "September 2014 - June 2016",
          "Independently studied Japanese using diverse online tools and media.",
          "Online lectures and virtual lab simulations provided foundational chemistry knowledge.",
          "Learning programming languages, software development life cycles, and project management.",
          "Studying Software Engineering while balancing academic, personal, and professional commitments."
        ]
      },
      highSchool: {
        title: "Primary Studies",
        details: [
          "Sandy Creek Central School — High School",
          "2002 - 2016"
        ]
      }
    }
  }
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
          <div className="text-top">About My Life</div>
          <img src={resumeImage} alt="Resume" />
          <div className="text-bottom">Click to View</div>
        </div>
      </div>
      
      <div className="right-content">
        <div className="button-container" onClick={() => handleButtonClick('portfolio')}>
          <div className="text-top">Professional Experience</div>
          <img src={portfolioImage} alt="Portfolio" />
          <div className="text-bottom">Click to View</div>
        </div>

        <div className="button-container" onClick={() => handleButtonClick('projects')}>
          <div className="text-top">Professional Education</div>
          <img src={projectsImage} alt="Projects" />
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