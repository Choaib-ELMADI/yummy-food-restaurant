import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsMenuButtonWide } from 'react-icons/bs';
import { MdOutlineRestaurant } from 'react-icons/md';

import './Navbar.css';



const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSmallIndex, setActiveSmallIndex] = useState(0);
  const [activeFav, setActiveFav] = useState(null);
  const [smallNav, setSmallNav] = useState(false);


  return (
    <nav className='app__navigation'>
        <a href="/" className="app__nav-logo">
          YummyFood
        </a>
        <ul className='app__nav-links'>
          {
            ['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((elt, index) => (
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
            <button 
              onClick={ () => {
                setActiveIndex(null);
                setActiveSmallIndex(null);
                setActiveFav(1);
              }} 
              className={ (activeFav === 1) ? 'active' : '' } 
              type="button"
            >
              Resto
            </button>
          </Link>
          <Link to="Favourites">
            <button 
              onClick={ () => {
                setActiveIndex(null);
                setActiveSmallIndex(null);
                setActiveFav(2);
              }}  
              className={ (activeFav === 2) ? 'active' : '' } 
              type="button"
            >
              Favourites
            </button>
          </Link>
        </div>
        <div className="app__nav-phone">
          { !smallNav && 
            <BsMenuButtonWide 
              fontSize={ 24 } 
              onClick={ () => setSmallNav(!smallNav) } 
              className='open__overlay'
            /> 
          }
          {
            smallNav &&
            <div className='app__small-nav-overlay'>
              <MdOutlineRestaurant
                fontSize={ 28 } 
                onClick={ () => setSmallNav(!smallNav) } 
                className='overlay__close' 
              />
              <ul className='app__small-nav-links'>
              {
                ['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((elt, index) => (
                  <li 
                    key={ elt } 
                    className= { (activeSmallIndex === index) ? 'p_opensans active' : 'p_opensans' }
                  >
                    <a
                      onClick={ () => { 
                        setSmallNav(false) 
                        setActiveSmallIndex(index);
                      } } 
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