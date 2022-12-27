import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { FaCartPlus } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Item.css';



const Item = ({ item, FavoratesList }) => {
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        const addToFav = localStorage.getItem(`${ item.name }-${ item.id }`);
        if (addToFav !== null) setHeart(addToFav);
    }, [])

    // useEffect(() => {
    //     localStorage.setItem(`${ item.name }-${ item.id }`, !heart);
    // }, [heart]);
    
    const handleHeartClick = (item) => {
        const addToFav = localStorage.getItem(`${ item.name }-${ item.id }`);
        if (addToFav !== null) setHeart(!heart);
        
        FavoratesList(item);
        { heart && toast.success(`${ item.name } added to favourites.`);}
        { !heart && toast.error(`${ item.name } removed from favourites.`);}
    }



    return (
        <div className='menu__item'>
            <div className='img__container'>
                <button className='heart' onClick={ () => handleHeartClick(item) }>
                    {
                        heart ? <AiFillHeart key={ item.name } className='fill__heart' /> :
                        <AiOutlineHeart key={ item.name } className='outline__heart' />
                    }
                </button>
                <div className="overlay" />
                <img 
                    className='plat__img'
                    src={ item.img[0] }
                    alt={ item.name } 
                />

                <div className="plat__info">
                    <h1>{ item.name }</h1>
                    <p>{ item.description }</p>
                    <b>{ item?.category }</b>
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