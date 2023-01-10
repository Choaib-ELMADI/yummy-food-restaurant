import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsPauseCircleFill, BsFillPlayCircleFill, BsCheckLg } from 'react-icons/bs';

import './About.css';
import { images } from '../../constants/index';



const About = () => {
  const [pause, setPause] = useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    if (!pause) vidRef.current.pause();
    else vidRef.current.play();
  }

  return (
    <div id='About' className='app__about'>
      <div className="app__about-left">
        <div className="app__about-video">
          <div className="video-overlay">
            <button onClick={ () => {
              handlePlayVideo();
              setPause(!pause);
            }}
            >
              { pause ? <BsPauseCircleFill /> : <BsFillPlayCircleFill /> }
            </button>
          </div>
          <video ref={ vidRef }  muted loop autoPlay>
            <source src={ images.video__1 } type="video/mp4" />
          </video>
        </div>
        <h1>Travel To <span>Morocco</span>, The Land of Spices.</h1>
      </div>
      <div className="app__about-right">
        <h1><span>We </span>Create the best food product</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dolores deleniti nihil dolore sed illo quo, 
          amet corporis pariatur temporibus tempore voluptate 
          rem nobis, obcaecati et? Vitae tempore consequatur
          voluptates vel voluptate beatae dolorem!
        </p>
        <ul className='app__about-list'>
          <li><BsCheckLg className='check' /> Lorem ipsum dolor sit amet elit.</li>
          <li><BsCheckLg className='check' /> Lorem dolor sit amet consectetur.</li>
          <li><BsCheckLg className='check' /> Lorem ipsum dolor, amet consectetur elit.</li>
        </ul>
        <Link to="SearchBar" className='app__about-more'>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
}

export default About;