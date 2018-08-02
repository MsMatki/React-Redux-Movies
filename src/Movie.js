import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

export default class Movie extends Component {


    state = {
        movieInfo:[]
    }

    movieInfo = () => {
        const {movie} = this.props;
        const {movieInfo} = this.state;

        const url = `${api}/movie/${movie.id}?api_key=${apiKey}&append_to_response=videos,images`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({movieInfo: movieInfo.push(data)})
        console.log(movieInfo)
        }).catch(error => console.log('Cant fetch any data', error))

        }



    render(){
        const {movie} = this.props;
        let poster = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
            <Link to="/MovieInfo">
            <div className="movie-item" onClick={this.movieInfo}>
                    <div className="movie-cover" style={styles}>
                        <div className="movie-rating"><span className="star"><FontAwesomeIcon icon={faStar}/></span><h6>{movie.vote_average}</h6></div>
                    </div>
                    <div className="text-container">
                        <h6>{movie.title}{movie.name}</h6>
                    </div>
            </div>
            </Link>
        )
    }
}



/*http://image.tmdb.org/t/p/w185//nLRcqfvSYj2AKy9aG10Dx6bxUsS.jpg*/