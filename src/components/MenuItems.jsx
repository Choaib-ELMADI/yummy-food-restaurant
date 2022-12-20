import React from 'react';

const MenuItems = ({ items }) => {
  return (
    <div className='menu__items'>
      {
        items.map(item => (
          <div key={ item.id } className='menu__item'>
            <img src={ item.img } alt={ item.name } />
            <h1>{ item.name }</h1>
            <p>{ item.description }</p>
            {/* <b>{ item.category }</b> */}
          </div>
        ))
      }
    </div>
  );
}

export default MenuItems;