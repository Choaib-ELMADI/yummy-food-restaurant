import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Home, SearchBar, Favorites } from './container/index';



const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [hearts, setHearts] = useState([1, 1, 1, 1, 1, 1]);

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

  const addToHearted = (index) => {
    const newHearts = hearts.map((hearted, i) => {
      if (i === index) return !hearted;
      return hearted;
    });
    setHearts(newHearts);
  }

  const removeHearted = (index) => {
    const oldHearts = hearts.map((hearted, i) => {
      if (i === index) return 1;
      return hearted;
    })
    setHearts(oldHearts);
  }



  return (
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="SearchBar"  
                element={ <SearchBar 
                                FavoratesList={ AddFavoratesList } 
                                addToHearted={ addToHearted } 
                                hearts={ hearts }
                        /> } />
          <Route path="Favourites" 
                element={ <Favorites 
                                setFavorites={ setFavorites } 
                                favorites={ favorites } 
                                removeHearted={ removeHearted }
                        /> } />
        </Routes>
        <Toaster />
    </div>
  );
}

export default App;