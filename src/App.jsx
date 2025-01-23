import { useEffect, useState } from 'react';
import './App2.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './component/MovieList.jsx';
import Heading from './component/Heading.jsx';
import SearchBox from './component/SearchBox.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({ Title: "" });

  // Function to fetch movies from the OMDB API
  const getMovieRequest = async () => {
    if (search.Title.trim() === "") return;  // Prevent empty search requests

    const url = `http://www.omdbapi.com/?s=${search.Title}&apikey=6a320492`;
    try {
      let res = await fetch(url);
      let jsonres = await res.json();
      if (jsonres.Search) {
        setMovies(jsonres.Search);
      } else {
        setMovies([]);  // Clear movies if no results found
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Handle search input change
  const onChange = (event) => {
    setSearch((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  // Fetch movies when the search term changes
  useEffect(() => {
    getMovieRequest();
  }, [search.Title]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <div className="indi">
          <div className="header">
            <Heading heading={"Movies"} />
            <SearchBox value={search.Title} name="Title" onChange={onChange} />
          </div>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
