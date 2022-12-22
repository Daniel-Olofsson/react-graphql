import { useEffect, useState } from 'react';
import Navbar from "./components/navbar/Navbar"
import {HashRouter , Route, Routes} from "react-router-dom"
import Home from './Home';
import Graphql from './graphql';
import About from './about';
import MoviePage from './components/MoviePage';
function App() {

  const [data,setData] = useState([]); 
  const [searchValue, setSearchValue] = useState('a');
  const [movie,setMovie] = useState([]); 
  const [latestView, setLatest] =useState([])
  
  const placeMovie = (index) =>{
    let dataRecently = latestView;
    dataRecently.push(data[index]);
    setLatest(dataRecently)
    setMovie(data[index])
    console.log(latestView)
    
  }
  
  const getDataReq = async () => {
    const api_key = `dd553bd18da52db5b93a11c3221826dc`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchValue}`;
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.results){
      setData(responseJson.results);
      
    }
  }
  useEffect(()=>{
    getDataReq(searchValue);
  },[searchValue])


  return (
    <div className="App">
      <HashRouter>
        <Navbar />
      
      <Routes>
            <Route exact path="/" element={<Home searchValue={searchValue} data={data} setSearchValue={setSearchValue} placeMovie={placeMovie} latestView={latestView}/>}/>
            <Route path="/graphql" element={<Graphql/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/MoviePage" element={<MoviePage  movie={movie}/>}/>
            
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
//fix routes