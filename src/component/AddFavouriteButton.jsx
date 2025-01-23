import React from 'react';
import { useFavourites } from './FavouritesContext'; // Correct the path

const AddFavouriteButton = ({ movie }) => {
  const { favourites, dispatch } = useFavourites();

  // Check if the movie is already in the favourites list
  const isFavourite = favourites.some(favMovie => favMovie.imdbID === movie.imdbID);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch({ type: 'REMOVE_FROM_FAVOURITES', id: movie.imdbID });
    } else {
      dispatch({ type: 'ADD_TO_FAVOURITES', movie });
    }
  };

  return (
    <button onClick={toggleFavourite}>
      {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
    </button>
  );
};

export default AddFavouriteButton;
