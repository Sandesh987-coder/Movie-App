import React from 'react';
import { useFavourites } from './FavouritesContext'; // Ensure this path is correct

const FavouritesList = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      <h2>Your Favourites</h2>
      <div className="favourites-grid">
        {favourites.map(movie => (
          <div className="favourite-card" key={movie.imdbID}> {/* Use imdbID as key */}
            {movie.Poster && movie.Poster !== "N/A" && (
              <img 
                src={movie.Poster} 
                alt={movie.Title || "Movie Poster"} 
                className="favourite-poster"
              />
            )}
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesList;
