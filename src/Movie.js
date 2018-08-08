import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {movieInfo} from './actions/movieActions'
import {connect} from 'react-redux'

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'



class Movie extends Component {
   

    movieSelected(id){
        sessionStorage.setItem('movieId', id);
        return false;
        }

    render(){
        const {movie} = this.props;
        let poster = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
            <div>
                <Link to="/MovieInfo">
            <div className="movie-item" onClick={(event) => {this.props.movieInfo(event.target.value), this.movieSelected(movie.id)}} >
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


const mapStateToProps = state => ({
    movies: state.movies.movieInfo,
  })
  
  export default connect(mapStateToProps, {movieInfo})(Movie);

/*http://image.tmdb.org/t/p/w185//nLRcqfvSYj2AKy9aG10Dx6bxUsS.jpg*/