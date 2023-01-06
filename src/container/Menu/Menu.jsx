import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';

import './Menu.css';
import { images } from '../../constants/index';



const Menu = () => {
  const [heart, setHeart] = useState(false);


  return (
    <div id='Menu' className='app__menu'>
      <div className="app__menu-right">
        <h1>We have <span>Delicious</span> food</h1>
        <h1><span>Tasty</span> food in town</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Aperiam ullam fugiat 
          dolores nihil aliquam consectetur est 
          illum? Optio ipsum labore placeat minus 
          delectus, error, molestiae corporis totam 
          commodi voluptas id esse unde recusandae 
          quidem nihil accusantium. Commodi ad dicta sunt.
        </p>
      </div>

      <div className="app__menu-left">

        <div className="app__menu-item">
          <button><ImCart className='heart-cart' fontSize={ 22 } /></button>
          <div className="app__menu-item-img">
            <img src={ images.tajine__8 } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>Chicken Tajine</h4>
              <small>Medium heat</small>
              <h5>$24.00</h5>
            </div>
            <div onClick={ () => setHeart(!heart) } className="app__menu-item-fav">
            { heart ? <AiOutlineHeart className='app__menu-heart' /> : 
                <AiFillHeart className='app__menu-heart' />
              }
            </div>
          </div>
        </div>

        <div className="app__menu-item">
          <button><ImCart className='heart-cart' fontSize={ 22 } /></button>
          <div className="app__menu-item-img">
            <img src={ images.tajine__6 } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>Beef Tajine</h4>
              <small>Medium heat</small>
              <h5>$35.00</h5>
            </div>
            <div onClick={ () => setHeart(!heart) } className="app__menu-item-fav">
              { heart ? <AiOutlineHeart className='app__menu-heart' /> : 
                <AiFillHeart className='app__menu-heart' />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;