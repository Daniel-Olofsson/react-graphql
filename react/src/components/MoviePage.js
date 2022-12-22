import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';


function MoviePage(props) {

  

  return (
    <div>
		<div className='card-singel'>
      <div>
        <img className='image-singel' src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path}/>
        <div className="card-title">
          <h1 className="font-weight-bold">{props.movie.title}</h1>
        </div>
        
        
        <h3  className="card-text">{props.movie.overview}</h3>
        
        <h5 className="font-weight-light">Language: {props.movie.original_language}</h5>
        <h5 className="font-weight-light">Release date: {props.movie.release_date}</h5>
      </div>
			
		</div>
    </div>
  )
}

export default MoviePage