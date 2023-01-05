import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';



const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [smallNav, setSmallNav] = useState(false);


  return (
    <nav className='app__navigation'>
        <div className="app__nav-logo">
          YummyFood
        </div>
        <ul className='app__nav-links'>
          {
            ['Home', 'About', 'Menu', 'Awards', 'Contact'].map((elt, index) => (
              <li 
                key={ elt }
                className={ (activeIndex === index) ? "p_opensans active" : "p_opensans" }
                onClick={ () => setActiveIndex(index) }
              >
                <div className='app__point-link' />
                <a href={ `/#${ elt }` }>{ elt }</a>
              </li>
            ))
          }
        </ul>      
        <div className="app__nav-favourites">
          <Link to="SearchBar">
            <button type="button">Resto</button>
          </Link>
          <Link to="Favourites">
            <button type="button">Favourites</button>
          </Link>
        </div>
        <div className="app__nav-phone">
          { !smallNav && <GiHamburgerMenu 
            fontSize={ 26 } 
            onClick={ () => setSmallNav(!smallNav) } 
            className='open__overlay'
          /> }
          {
            smallNav &&
            <div className='app__small-nav-overlay'>
              <MdOutlineRestaurantMenu 
                fontSize={ 26 } 
                onClick={ () => setSmallNav(!smallNav) } 
                className='overlay__close' 
              />
              <ul className='app__small-nav-links'>
              {
                ['Home', 'About', 'Menu', 'Awards', 'Contact'].map(elt => (
                  <li 
                    key={ elt } 
                    className='p_opensans'
                  >
                    <a
                      onClick={ () => setSmallNav(false) } 
                      href={ `/#${ elt }` }>{ elt }
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