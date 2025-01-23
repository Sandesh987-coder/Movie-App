import { useEffect, useState } from "react"
import "./App2.css"
import MovieList from "./component/MovieList"
import Heading from "./component/Heading"
import SearchBox from "./component/SearchBox"

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
    <div className="container">
      <div className="content">
        <div className="movie-container">
          <div className="header">
            <Heading heading="Movies" />
            <SearchBox value={search.Title} name="Title" onChange={onChange} />
          </div>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  )
}

export default App

