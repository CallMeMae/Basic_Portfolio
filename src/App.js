import React, { useState } from 'react';
import { ThemeProvider, createTheme, Arwes, Words } from 'arwes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sandbox from './components/Sandbox';
import LifeStorySlider from './components/LifeStorySlider';
import Menu from './components/Menu';
import HomeContent from './components/HomeContent';
import PlayContent from './components/PlayContent';
import ExampleContent from './components/ExampleContent';
import Clock from './components/Clock';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const theme = createTheme({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  const slideTexts = [
    'Committed to continual growth and embarking on a dynamic career in software development.',
    'Honorably served in the United States Army for six years, from 2016 to 2022.',
    'Initiated my academic journey at the Massachusetts Institute of Technology and proudly completed my Bachelors degree at Southern New Hampshire University.'
  ];

  const afterChange = (current) => {
    setCurrentSlide(current);
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 50);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Arwes animate show>
          <div className="app-container" style={{ position: 'relative' }}>
            <Sandbox />
            <Menu />
            <Routes>
              <Route path="/home" element={<HomeContent />} />
              <Route path="/play" element={<PlayContent />} />
              <Route path="/example" element={<ExampleContent />} />
              <Route path="/" element={<HomeContent />} />
            </Routes>
            <Clock />
            <LifeStorySlider afterChange={afterChange} />
            <div className="bottom-banner">
              {animateText && (
                <Words animate>{slideTexts[currentSlide]}</Words>
              )}
            </div>
          </div>
        </Arwes>
      </Router>
    </ThemeProvider>
  );
};

export default App;