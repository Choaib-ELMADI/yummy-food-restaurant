import React, { useRef } from 'react';
import { CgKey } from 'react-icons/cg';
import { BsInstagram } from 'react-icons/bs';
import { HiArrowLeftCircle, HiArrowRightCircle } from 'react-icons/hi2';

import './Gallery.css';
import { images } from '../../constants/index';
const pictures = [
                  images.ouarzazate__2,
                  images.tea__4, 
                  images.bastilla__4,
                  images.tea__5, 
                  images.tajine__3, 
                  images.tajine__7, 
                  images.tajine__10, 
                  images.bastilla__2, 
                  images.couscous__6, 
                  images.background__2,
                  images.bread__1,
                  images.rfissa__2,
                  images.ouarzazate__1 
                ];



const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 205;
    }
    else {
      current.scrollLeft += 205;
    }
  }


  return (
    <div id='Gallery' className='app__gallery'>
      <div className="app__gallery-info">
        <h3>
          <span>Instagram</span>
          <CgKey className='key' />
        </h3>
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Commodi unde sit nisi 
          aperiam, ducimus eius id perspiciatis 
          eligendi doloremque asperiores voluptatum. 
          Praesentium sit neque provident necessitatibus 
          officiis ratione aliquid dolorum?
        </p>
        <a href="https://www.instagram.com/p/CnAH9G5tq27/?igshid=YmMyMTA2M2Y=" target='_blank'>
          <button>View More</button>
        </a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-insta" ref={ scrollRef }>
          { 
            pictures.map((pic, index) => (
              <div 
                className='pic-container' 
                key={ index } 
              >
                <div className='pic-overlay' />
                <img 
                  className='pic' 
                  src={ pic } 
                  alt="picture" 
                />
                <a href="https://www.instagram.com/p/CnAH9G5tq27/?igshid=YmMyMTA2M2Y=" target='_blank'>
                  <BsInstagram className='ista-icon' />
                </a>
              </div>
            ))
          }
        </div>
        <HiArrowLeftCircle className='Arrow left' onClick={ () => scroll('left') } />
        <HiArrowRightCircle className='Arrow right' onClick={ () => scroll('right') } />
      </div>
    </div>
  );
}

export default Gallery;