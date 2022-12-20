import React, { useState } from 'react';

import { foods, filterItems } from '../data.js';
import MenuItems from './MenuItems';



const SearchBar = () => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  return (
    <div className='container'>
      <div className='search'>
        <input
          className='search__input'
          placeholder='Search Items ...'
          value={ query }
          onChange={ e => setQuery(e.target.value) }
        />
      </div>
      {/* <div className='btns'>
        {
          ['Breakfast', 'Lunch', 'Dinner'].map(elt => (
            <button
              key={ elt }
              className='btn'
              onClick={ setItems(items.filter(item => item.category === elt.toLowerCase() )) }
            >{ elt }</button>
          ))
        }
      </div> */}
      <MenuItems items={ results }/>
    </div>
  )
}

export default SearchBar;