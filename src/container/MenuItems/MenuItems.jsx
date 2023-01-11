import React from 'react';

import Item from '../Item/Item.jsx';
import './MenuItems.css';



const MenuItems = ({ items, FavoratesList, addToHearted, hearts }) => {
  return (
    <div className='menu__items'>
      {
        items.map((item, index) => (
          <Item 
            key={ item.id } 
            item={ item } 
            FavoratesList={ FavoratesList } 
            addToHearted={ addToHearted } 
            index={ index } 
            hearts={ hearts } />
        ))
      }
    </div>
  );
}

export default MenuItems;