import React from 'react';
import { TfiLayoutListThumbAlt } from 'react-icons/tfi';

import './Favorites.css';
import Favorite from './Favorite';



const Favorites = ({ favorites, setFavorites, removeHearted }) => {
    return (
        <div className='app__favorites'>
            { 
                favorites.length < 1 && 
                <>
                    <TfiLayoutListThumbAlt className='empty__fav' />
                    <h1>Your Favourites is empty</h1>
                </>
            }
            {
                favorites.map(fav => (
                    <Favorite 
                        fav={ fav } 
                        setFavorites={ setFavorites } 
                        favorites={ favorites } 
                        removeHearted={ removeHearted }
                    />
                ))
            }
        </div>
    );
}

export default Favorites;