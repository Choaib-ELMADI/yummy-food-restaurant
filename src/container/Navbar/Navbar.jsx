import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';



const Navbar = ({ onSeeResto, onSeeFavorites, close }) => {
  const [smallNav, setSmallNav] = useState(false);

  return (
    <nav className='app__navigation'>
        <div className="app__nav-logo">
          YummyFood
        </div>
        <ul className='app__nav-links'>
          {
            ['Home', 'About', 'Menu', 'Awards', 'Contact'].map(elt => (
              <li 
                key={ elt } 
                className='p_opensans'
                onClick={ close }
              >
                <div className='app__point-link' />
                <a href={ '#' + elt }>{ elt }</a>
              </li>
            ))
          }
        </ul>        
        <div className="app__nav-favourites">
          <button onClick={ onSeeResto } type="button">Resto</button>
          <button onClick={ onSeeFavorites } type="button">Favourites</button>
        </div>
        <div className="app__nav-phone">
          { !smallNav && <GiHamburgerMenu fontSize={ 26 } onClick={ () => setSmallNav(!smallNav) } /> }
          {
            smallNav &&
            <div className='app__small-nav-overlay'>
              <MdOutlineRestaurantMenu fontSize={ 26 } onClick={ () => setSmallNav(!smallNav) } className='overlay__close' />
              <ul className='app__small-nav-links'>
              {
                ['Home', 'About', 'Menu', 'Awards', 'Contact'].map(elt => (
                  <li 
                    key={ elt } 
                    className='p_opensans' 
                    onClick={ close }
                  >
                    <div className='app__point-link' />
                    <a 
                      onClick={ () => setSmallNav(false) } 
                      href={ '#' + elt }>{ elt }
                    </a>
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