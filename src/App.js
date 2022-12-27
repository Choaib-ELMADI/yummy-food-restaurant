import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Navbar, Header, About, Gallery, Menu, SearchBar, FindUs, Footer, Favorites } from './container/index';



const App = () => {
  const [seeResto, setSeeResto] = useState(false);
  const [seeFavorites, setSeeFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const ShowResto = () => {
    setSeeResto(!seeResto);
    setSeeFavorites(false);
  }
  const ShowFavorites = () => {
    setSeeFavorites(!seeFavorites);
    setSeeResto(false);
  }
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
        <Navbar 
          onSeeResto={ () => ShowResto() } 
          onSeeFavorites={ () => ShowFavorites() }
          close={ () => {
            setSeeResto(false);
            setSeeFavorites(false);
          } }
        />
        { !seeResto && !seeFavorites &&
          <>
            <Header />
            <About />
            <Menu />
            <Gallery />
            <FindUs />
            <Footer />
          </>
        }
        { seeResto &&
          <SearchBar FavoratesList={ AddFavoratesList } />
        }
        { seeFavorites &&
          <Favorites setFavorites={ setFavorites } favorites={ favorites } />
        }
        <Toaster />
    </div>
  );
}

export default App;