import React from 'react';

import './Wrapper.css';



const Wrapper = (Component) => function HOC() {
  return (
    <div className="app__wrapper">
        <Component />
    </div>
  )
}

export default Wrapper;