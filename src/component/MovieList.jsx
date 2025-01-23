import React from 'react'

export default function MovieList(props) {
  return (
    <div>
        {props.movies.map((movie,index)=>
            <div className="movie-list" key={index}>
                <img src={movie.Poster} alt="movie_image" className='img' />
            </div>

        )}
    </div>
  )
}
