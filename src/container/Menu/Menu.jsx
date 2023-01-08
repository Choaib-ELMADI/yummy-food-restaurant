import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';

import './Menu.css';
import { SideItem } from '../index';
import { foods } from '../../data';




const Menu = () => {
  const [heart, setHeart] = useState([1, 1]);
  const [showSideItem, setShowSideItem] = useState(false);
  const [pickedItem, setpickedItem] = useState(null);

  
  const R1 = Math.floor(Math.random() * 5);
  const R2 = Math.floor(Math.random() * 5);
  

  const addToFav = (x) => {
    const nextHeart = heart.map((item, i) => {
      if (i === x) {
        return !item;
      } else {
        return item;
      }
    });
    setHeart(nextHeart);
  }

  return (
    <div id='Menu' className='app__menu'>
      { showSideItem && 
        <SideItem 
          x={ (R1 === pickedItem) ? R1 : R2 } 
          SideOpen={ setShowSideItem } 
        /> 
      }
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
          <button
            onClick={ () => {
              setShowSideItem(true);
              setpickedItem(R1);
              }
            }
          >
            <ImCart
              className='heart-cart' 
              fontSize={ 22 } 
            />
          </button>
          <div className="app__menu-item-img">
            <img src={ foods[R1].img[0] } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>{ foods[R1].name }</h4>
              <small>Medium heat</small>
              <h5>{ foods[R1].price }</h5>
            </div>
            <div onClick={ () => addToFav(0) } className="app__menu-item-fav">
            { heart[0] ? <AiOutlineHeart className='app__menu-heart' /> : 
                <AiFillHeart className='app__menu-heart' />
              }
            </div>
          </div>
        </div>

        <div className="app__menu-item">
          <button
            onClick={ () => {
              setShowSideItem(true);
              setpickedItem(R2);
              }
            }
          >
            <ImCart
              className='heart-cart' 
              fontSize={ 22 } 
            />
          </button>
          <div className="app__menu-item-img">
            <img src={ foods[R2].img[0] } alt='order' />
          </div>
          <div className="app__menu-item-info">
            <div className="app__menu-item-name">
              <h4>{ foods[R2].name }</h4>
              <small>Medium heat</small>
              <h5>{ foods[R2].price }</h5>
            </div>
            <div onClick={ () => addToFav(1) } className="app__menu-item-fav">
              { heart[1] ? <AiOutlineHeart className='app__menu-heart' /> : 
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