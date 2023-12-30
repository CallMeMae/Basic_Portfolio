import React from 'react';
import './GameStyleMenu.css';

const GameStyleMenu = ({ activeTab, setActiveTab, content, onClose }) => {
  if (!content || !content.tabs || !content.title || !content.description) {
    console.error("Invalid content data:", content);
    return null;
  }

  const renderTabContent = (tabContent) => {
    if (!tabContent || typeof tabContent !== 'object') {
      return null;
    }

    return (
      <>
        <h1>{tabContent.title}</h1>
        {tabContent.details && tabContent.details.map((detail, index) => {
          const className = index === 2 || index === 5 ? "detail-text-small" : "detail-text";
          return (
            <p key={index} className={className}>
              <span className="index-text"></span> {detail}
            </p>
          );
        })}
        {content.downloadLink && (
          <a href={content.downloadLink.link} target="_blank" rel="noopener noreferrer">
            {content.downloadLink.label}
          </a>
        )}
      </>
    );
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="game-style-menu" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="character-info">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="tabs">
          {Object.keys(content.tabs).map((tabKey) => (
            <div
              key={tabKey}
              className={`tab ${activeTab === tabKey ? 'active' : ''}`}
              onClick={() => setActiveTab(tabKey)}
            >
              {content.tabs[tabKey].title || tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
            </div>
          ))}
        </div>
        <div className="content-display">
          {content.tabs[activeTab] ? renderTabContent(content.tabs[activeTab]) : null}
        </div>
      </div>
    </div>
  );
};

export default GameStyleMenu;