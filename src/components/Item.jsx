import React, { useState } from 'react';

import { FaCartPlus } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';



const Item = ({ item }) => {
    const [heart, setHeart] = useState(false);

    return (
        <div className='menu__item'>
            <div className='img__container'>
                <button className='heart' onClick={ () => setHeart(!heart) }>
                    {
                    heart ? <AiFillHeart key={ item.name } className='fill__heart' /> :
                    <AiOutlineHeart key={ item.name } className='outline__heart' />
                    }
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
    );
}

export default Item;