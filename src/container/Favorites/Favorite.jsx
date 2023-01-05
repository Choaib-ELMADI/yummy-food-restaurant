import React, { useState } from 'react';
import toast from 'react-hot-toast';

import './Favorites.css';



const Favorite = ({ fav, setFavorites, favorites }) => {
    const [index, setIndex] = useState(0);

    return (
        <div key={ fav.id } className="app__fav">
            <div className="app__fav-imgs">
                <div className='app__fav-img'>
                    <img 
                        src={ fav.img[index] }
                        alt={ fav.name }
                    />
                </div>
                <div className="app__fav-small-imgs">
                {
                    fav.img.slice(0, 4).map((pic, index) => (
                    <img 
                        onPointerEnter={ () => setIndex(index) }
                        key={ pic } 
                        src={ fav.img[index] }
                        slt={ fav.name }
                        className='app__fav-small-img' 
                    />
                    ))
                }
                </div>
            </div>
            <div className='app__fav-info'>
                <h1>{ fav.name }</h1>
                <p>{ fav.description }</p>
                <div className="app__fav-btns">
                    { fav?.category && <button type="button">{ fav.category }</button> }
                    <button 
                        type="button"
                        onClick={ () => {
                            setFavorites(
                                favorites.filter(favr => favr.id != fav.id)
                            )
                            toast.error(`${ fav.name } removed from favourites.`);
                        }}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Favorite;