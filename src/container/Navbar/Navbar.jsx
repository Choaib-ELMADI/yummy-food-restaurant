import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';



const Navbar = () => {
  const [smallNav, setSmallNav] = useState(false);

  return (
    <nav className='app__navigation'>
        <div className="app__nav-logo">
          YummyFood
        </div>
        <ul className='app__nav-links'>
          {
            ['Home', 'About', 'Menu', 'Awards', 'Contact'].map(elt => (
              <li key={ elt } className='p_opensans'>
                <div className='app__point-link' />
                <a href={ '#' + elt }>{ elt }</a>
              </li>
            ))
          }
        </ul>        
        <div className="app__nav-favourites">
          <a href="#Cart">Cart</a>
          <a href="#Favourites">Favourites</a>
        </div>
        <div className="app__nav-phone">
          { !smallNav && <GiHamburgerMenu className='open__overlay' fontSize={ 26 } onClick={ () => setSmallNav(!smallNav) } /> }
          {
            smallNav &&
            <div className='app__small-nav-overlay'>
              <MdOutlineRestaurantMenu 
                fontSize={ 30 } 
                onClick={ () => setSmallNav(!smallNav) }
                className='overlay__close' 
              />
              <ul className='app__small-nav-links'>
              {
                ['Home', 'About', 'Menu', 'Awards', 'Contact'].map(elt => (
                  <li 
                    onClick={ () => setSmallNav(!smallNav) } 
                    key={ elt } 
                    className='p_opensans'
                  >
                    <div className='app__point-link' />
                    <a href={ '#' + elt }>{ elt }</a>
                  </li>
                ))
              }
              </ul>
            </div>
          }
        </div>
    </nav>
  );
}

export default Navbar;