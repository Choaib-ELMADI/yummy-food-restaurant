import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './Header.css';
import { images } from '../../constants/index';



const Header = () => {
  return (
    <div id='Home' className='app__header'>
        <div className='before' />
        {/* <div className='after' /> */}
        <div className='corner' />

        <div className="app__header-content">
          <div className='app__header-info'>
            <h1>Delicious Food is Waiting For you</h1>
            <a href='#Menu'>View Menu <AiOutlineArrowRight className='arrow' /></a>
            <div className='app__header-info-icons'>
                <img src={ images.logo__1 } />
                <img src={ images.logo__2 } />
                <img src={ images.logo__3 } />
            </div>
          </div>
          <div className='app__header-banner'>
            <div className='app__header-item'>
              <div className='overlay' />
              <div className='app__header-item-info'>
                <h1>The Moroccan Harira</h1>
                <p>A traditional dish</p>
              </div>
              <img src={ images.harira__1 } />
            </div>

            <div className='app__header-item'>
              <div className='overlay' />
              <div className='app__header-item-info'>
                <h1>BM Dish</h1>
                <p>A very popular dish</p>
              </div>
              <img src={ images.tajine__4 } />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;