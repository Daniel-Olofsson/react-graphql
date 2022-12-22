import React from 'react';
import { NavLink} from 'react-router-dom';



export default function Movie(props) {
	const handleClick = () => {
		props.placeMovie(props.index);
	} 
	

	return (
	<div>

		<img className='image-list' src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path}/>
		<h4 className="font-weight-bold">{props.movie.title}</h4>
		<h5 classNAme="font-weight-light">Score:{props.movie.vote_average}</h5>
		<li className='li-button'><NavLink onClick={handleClick} to={`/MoviePage`}>Movie page</NavLink></li>
	

	</div>
	);
  };

