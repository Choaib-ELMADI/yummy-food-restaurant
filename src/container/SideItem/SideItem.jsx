import React from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

import './SideItem.css';
import { foods } from '../../data';



const SideItem = ({ x, SideOpen }) => {
    const closeToggled = () => {
        SideOpen(false);
    }

    return (
        <div className="app__menu-side-item-main">
            <div className="app__menu-side-item">
                <RiCloseCircleFill 
                    onClick={ () => closeToggled() } 
                    className='close__side-item' 
                />
                <div className='app__menu-side-item-info'>
                    <h1>{ foods[x].name }</h1>
                    <p>
                        <h4>{ foods[x].price }</h4>
                        <button>Buy</button>
                    </p>
                    <div className='app__menu-side-item-wrapper'>
                        <div className='app__menu-side-item-pics'>
                            {
                                foods[x].img.map((image, index) => (
                                    <img 
                                        key={ index }
                                        className='app__site-image' 
                                        src={ image } 
                                        alt="food" 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <h3>
                        { foods[x].description }
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default SideItem;