import React from 'react';

import Item from '../Item/Item.jsx';
import './MenuItems.css';



const MenuItems = ({ items }) => {
  return (
    <div className='menu__items'>
      {
        items.map(item => (
          <Item key={ item.id } item={ item } />
        ))
      }
    </div>
  );
}

export default MenuItems;