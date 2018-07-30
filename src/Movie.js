import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class Movies extends Component{



    render(){
        const {movie} = this.props
        let poster = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
            <div className="movie-item">
                
                    <div className="movie-cover" style={styles}>
                        <div className="movie-rating"><span className="star"><FontAwesomeIcon icon={faStar}/></span><h6>{movie.vote_average}</h6></div>
                    </div>
                    <div className="text-container">
                        <h6>{movie.title}{movie.name}</h6>
                    </div>
            </div>
        )
    }
}

/*http://image.tmdb.org/t/p/w185//nLRcqfvSYj2AKy9aG10Dx6bxUsS.jpg*/