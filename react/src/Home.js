import {React} from "react";
import SearchBox from "./components/SearchBox";
import Movie from "./components/Movie";
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Home (props) {
  const sliderSettings = {
      	infinite: true,
      	speed: 1000,
      	slidesToShow: 6,
      	slidesToScroll: 3,
        dots: true
	  }

  return (

    <div className="App">
      <h1>Movies</h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
			</div>
      


      <div className="block">
        <Slider {...sliderSettings}>
          {props.data.map((movie, index) => {
          return <Movie key={movie.id} movie={movie} placeMovie={props.placeMovie} index={index}/>;
                  
          })}
        </Slider>
        
        
      </div>
      <h1 className="center">Recently viewed</h1>
      <div className="inline-view">

        {props.latestView.map((n) => {
          return <img  key={n.id} src={"https://image.tmdb.org/t/p/w500" + n.backdrop_path} alt={n.poster_path}/>
                  
        })}
      
      </div>
    </div>
  );
}

export default Home