import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const MenuItems = ({ items }) => {
  return (
    <div className='menu__items'>
      {
        items.map(item => (
          <div key={ item.id } className='menu__item'>
            <div className='img__container'>
              <button className='heart'>
                <AiOutlineHeart className='outline__heart' />
                <AiFillHeart className='fill__heart' />
              </button>
              <div className="overlay" />
              <img 
                className='plat__img'
                src={ item.img } 
                alt={ item.name } 
              />

              <div className="plat__info">
                <h1>{ item.name }</h1>
                <p>{ item.description }</p>
                <b>{ item.category }</b>
              </div>
            </div>
            <div className='btns'>
              <button className='btn'>
                <FaCartPlus className='icon' />
                <span>Add to Cart</span>
              </button>

              <button className='btn'>
                <RiMoneyPoundCircleFill className='icon' />
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default MenuItems;