import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Home, SearchBar, Favorites } from './container/index';



const App = () => {
  const [favorites, setFavorites] = useState([]);

  const AddFavoratesList = (elt) => {
    if (favorites.length < 1) {
      setFavorites([
        ...favorites,
        {
          id: elt.id,
          name: elt.name,
          img: elt.img,
          description: elt.description,
          category: elt.category
        }
      ])
    }
    else {
      favorites.map(fav => {
        if (fav.id != elt.id) {
          setFavorites([
            ...favorites,
            {
              id: elt.id,
              name: elt.name,
              img: elt.img,
              description: elt.description,
              category: elt.category
            }
          ])
        }
        else {
          setFavorites(
            favorites.filter(elm => elm.id != elt.id)
          )
        }
      })
    }
  }



  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="SearchBar"  element={ <SearchBar FavoratesList={ AddFavoratesList } /> } />
          <Route path="Favourites" element={ <Favorites setFavorites={ setFavorites } favorites={ favorites } /> } />
        </Routes>
        <Toaster />
    </div>
  );
}

export default App;