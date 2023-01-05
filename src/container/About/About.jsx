import React from 'react';

import './About.css';
import { images } from '../../constants/index';



const About = () => {
  return (
    <div id='About' className='app__about'>
      <div className="app__about-video">
        <div className="video-overlay">
          <button onClick="">||</button>
        </div>
        <video  muted loop autoplay>
          <source src={ images.video__1 } type="video/mp4" />
        </video>
      </div>
      <div className="app__about-items">
        <div className="app__about-item">
            
        </div>
      </div>
    </div>
  );
}

export default About;