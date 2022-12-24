import React, { useState } from 'react';

import './Favorites.css';



const Favorites = ({ favorites, setFavorites }) => {
    return (
        <div className='app__favorites'>
            { 
                favorites.length < 1 &&
                <h1>Your Favorites is empty</h1>
            }
            {
                favorites.map(fav => (
                    <div key={ fav.id } className="app__fav">
                        <div className='app__fav-img'>
                            <img src={ fav.img } alt={ fav.name } />
                        </div>
                        <div className='app__fav-info'>
                            <h1>{ fav.name }</h1>
                            <p>{ fav.description }</p>
                            <div className="app__fav-btns">
                                { fav?.category && <button type="button">{ fav.category }</button> }
                                <button 
                                    type="button"
                                    onClick={ () => setFavorites(
                                        favorites.filter(favr => favr.id != fav.id)
                                    ) }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Favorites;