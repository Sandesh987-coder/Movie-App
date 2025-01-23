import React from 'react';
import AddFavouriteButton from './AddFavouriteButton'; // Ensure this path is correct

export default function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}> {/* Use imdbID as key */}
          {movie.Poster && movie.Poster !== "http://www.omdbapi.com/?s=${search.Title}&apikey=6a320492" && (
            <img 
              src={movie.Poster} 
              alt={movie.Title || "Movie Poster"} 
              className="movie-poster" 
            />
          )}
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <AddFavouriteButton movie={movie} /> {/* Add favourite button */}
          </div>
        </div>
      ))}
    </div>
  );
}
