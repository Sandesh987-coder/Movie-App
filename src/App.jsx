import { useEffect, useState } from 'react'
import './App2.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './component/MovieList.jsx'
import Heading from './component/Heading.jsx';
import SearchBox from './component/SearchBox.jsx';

function App() {
  const [movies,setMovies]=useState([])
const getMovieRequest=async ()=>{
  const url="http://www.omdbapi.com/?i=tt3896198&apikey=6a320492&s=Iron man";
  let res=await fetch(url);
  let jsonres=await res.json();
  setMovies(jsonres.Search);
}
useEffect(()=>{
  getMovieRequest()
},[]);
  return (
      <div className='container-fluid movie-app'>
        <div className='row'>
            <div className="indi">
              <div className="header">
                  <Heading heading={"Movies"}/>
                  <SearchBox/>
              </div>
            <MovieList movies={movies}/>
            </div>
        </div>
      </div>
      
  )
}

export default App
