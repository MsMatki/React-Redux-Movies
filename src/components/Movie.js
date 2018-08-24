import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class Movie extends Component {
   

    movieSelected(id){
        sessionStorage.setItem('movieId', id);
        return false;
        }

    render(){
        const {movie} = this.props;
        let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
            <div>
                <Link to="/MovieInfo">
            <div className="movie-item" onClick={(event) => {this.movieSelected(movie.id); this.props.setPage()}} >
                    <div className="movie-cover" style={styles}>
                        <div className="movie-rating"><span className="star"><FontAwesomeIcon icon={faStar}/></span><h6>{movie.vote_average}</h6></div>
                    </div>
                    <div className="text-container">
                        <h6>{movie.title}{movie.name}</h6>
                    </div>
            </div>
            </Link>
        </div>
        )
    }
}


export default Movie;
