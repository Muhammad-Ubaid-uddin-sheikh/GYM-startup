// Slideshow.js
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Slider.css'; // Import the CSS file
import Video from '../../assets/video.mp4'
import Img from '../../assets/Blackbanenr.png'
const Slideshow = () => {
  const $slider = useRef(null);

  const maxItems = 4; // Assuming there are 4 items in the slideshow

  useEffect(() => {
    // Initialize the sliders and event listeners here
    // ...

    return () => {
      // Clean up event listeners if needed
      // ...
    };
  }, [maxItems]);

  // Event handler functions
  // ...

  return (
    <div className="MainDiv">
    <div className="split-slideshow">
      <div className="slideshow">
        <Slider ref={$slider} className="slider" vertical={true} verticalSwiping={true} arrows={false} infinite={true} dots={true} speed={1000} cssEase="cubic-bezier(0.7, 0, 0.3, 1)">
          {/* Slides go here */}
          <div className="item">
            <img src={Img} alt="Slide 1" />
          </div>
          <div className="item">
          <video  controls autoplay loop>
  <source src={Video} alt="Slide 2" type="video/mp4"/>

</video>
           
        
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg" alt="Slide 3" />
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg" alt="Slide 4" />
          </div>
        </Slider>
      </div>
     
    </div>
    </div>
  );
};

export default Slideshow;
