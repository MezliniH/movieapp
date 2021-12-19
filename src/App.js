import React , {useState} from 'react'
import './App.css'
import MovieNavbar from './MovieNavbar/MovieNavbar'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieData from './Data/MovieData';
import MovieList from './MovieList/MovieList';
import AddMovie from './AddMovie/AddMovie';


function App() {
  const [titleSearch , setTitleSearch]=useState("");
  const getTitleSearch =(input)=>{
    setTitleSearch(input)
  };
  const [rateSearch, setRateSearch] = useState(0);
  const getRateSearch =(input)=>{
    setRateSearch(input)
  };
  const [movieListData, setMovieListData] = useState(MovieData);
  const getMoviesListData=(input)=>{
    setMovieListData([...movieListData ,input]);
  }
  return (
    <div className='App'>
      <MovieNavbar 
      getTitleSearch={getTitleSearch}
      getRateSearch={getRateSearch}
     />
    <div className="App-container">
     <MovieList className="Movie-container" 
      movieListData={movieListData} 
      titleSearch={titleSearch}
      rateSearch={rateSearch}/>
     </div>
     <div className="addMovie">
     <AddMovie getMoviesListData={getMoviesListData}/>
     </div>
    </div>
  )
}

export default App
