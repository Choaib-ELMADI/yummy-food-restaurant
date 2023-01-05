import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import './Menu.css';
import { images } from '../../constants/index';



const Menu = () => {
  return (
    <div id='Menu' className='app__menu'>
      <div className="app__menu-left">

        <div className="app__menu-item">
          <button>|||</button>
          <div className="app__menu-item-img">
            <img src={ images.tajine__8 } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>Chicken Tajine</h4>
              <small>Medium heat</small>
              <h5>$24.00</h5>
            </div>
            <div className="app__menu-item-fav">
              <AiOutlineHeart className='app__menu-heart' />
            </div>
          </div>
        </div>

        <div className="app__menu-item">
          <button>|||</button>
          <div className="app__menu-item-img">
            <img src={ images.tajine__6 } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>Beef Tajine</h4>
              <small>Medium heat</small>
              <h5>$35.00</h5>
            </div>
            <div className="app__menu-item-fav">
              <AiOutlineHeart className='app__menu-heart' />
            </div>
          </div>
        </div>
      </div>
      <div className="app__menu-right">
        <h1>We have Delicious food</h1>
        <h1>Tasty food in town</h1>
        <p>
          Cepteur sint occaecat cupidataf proident, 
          taken prossession of my entire soul, like 
          these sweet mornings of spring which I enjoy 
          with my whole.
        </p>
      </div>
    </div>
  );
}

export default Menu;