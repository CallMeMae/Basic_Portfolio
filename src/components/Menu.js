import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState('/');

  return (
    <div className="menu-container">
      <nav className="menu-nav">
        <Link to="/home" className={`menu-item ${selectedItem === '/home' ? 'selected' : ''}`}
              onClick={() => setSelectedItem('/home')}>HOME</Link>
        <Link to="/play" className={`menu-item ${selectedItem === '/play' ? 'selected' : ''}`}
              onClick={() => setSelectedItem('/play')}>PROJECTS</Link>
        <Link to="/example" className={`menu-item ${selectedItem === '/example' ? 'selected' : ''}`}
              onClick={() => setSelectedItem('/example')}>CONTACT</Link>
      </nav>
    </div>
  );
};

export default Menu;