import { useEffect, useState } from "react"
import "./App2.css"
import MovieList from "./component/MovieList"
import Heading from "./component/Heading"
import SearchBox from "./component/SearchBox"
import FavouritesList from "./component/FavouritesList"; // Path is correct
import { FavouritesProvider } from "./component/FavouritesContext"; // Path is correct




function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState({ Title: "" })

  const getMovieRequest = async () => {
    if (search.Title.trim() === "") return

    const url = `http://www.omdbapi.com/?s=${search.Title}&apikey=6a320492`
    try {
      const res = await fetch(url)
      const jsonres = await res.json()
      if (jsonres.Search) {
        setMovies(jsonres.Search)
      } else {
        setMovies([])
      }
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  const onChange = (event) => {
    setSearch((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    getMovieRequest()
  }, [search.Title])

  return (
    <FavouritesProvider>


    <div className="container">
      <div className="content">
        <div className="movie-container">
          <div className="header">
            <Heading heading="Movies" />
            <SearchBox value={search.Title} name="Title" onChange={onChange} />
          </div>
          <MovieList movies={movies} />
          <FavouritesList/>
        </div>
      </div>
    </div>
    </FavouritesProvider>
  )
}

export default App

