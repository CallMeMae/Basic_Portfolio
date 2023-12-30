import React from 'react';
import Slider from 'react-slick';
import MeChar1 from '../image/MeChar1edit.png';
import MeChar2 from '../image/MeChar4edit.png';
import MeChar3 from '../image/MeChar6edit.png';


const LifeStorySlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: props.afterChange,
  };

  return (
    <Slider {...settings} className="custom-slick life-story-slider">
      <div>
        <img src={MeChar1} alt="Life Story Image 1" />
      </div>
      <div>
        <img src={MeChar2} alt="Life Story Image 2" />
      </div>
      <div>
        <img src={MeChar3} alt="Life Story Image 3" />
      </div>
    </Slider>
  );
};

export default LifeStorySlider;