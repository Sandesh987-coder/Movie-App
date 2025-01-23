import React from "react"

export default function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.Poster || "/placeholder.svg"} alt={movie.Title || "Movie Poster"} className="movie-poster" />
        </div>
      ))}
    </div>
  )
}

