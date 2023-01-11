import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

import './FindUs.css';
import { images } from '../../constants/index';



const FindUs = () => {
  return (
    <div id='Contact' className='app__findus'>
      <div className="findus__info">
        <h1>drop us a line</h1>
        <h2>Contact Information</h2>
        <label>
          <GiPositionMarker className='icon' />
          <h3>40000, Marrakech - Morocco</h3>
        </label>
        <label>
          <BsFillTelephoneFill className='icon' />
          <a href="tel:0614001973">0614001973</a>
        </label>
        <label>
          <MdMail className='icon' />
          <a href="mailto:choaib3elmadi@gmail.com">choaib3elmadi@gmail.com</a>
        </label>
      </div>
      <div className="findus__banner">
        <img src={ images.findus__img } alt="findus__banner" />
      </div>
    </div>
  );
}

export default FindUs;