import React, { Component } from 'react';
import Movies from './Movie'

export default class MovieContainer extends Component{

    render(){
        return(
            <div className="movie-container">
                <div className="wrap">
                    {this.props.searchedMovies.map((movie) => (
                    <Movies 
                    key={movie.id}
                    movie={movie}
                    />
                    ))}
                    </div>
                </div>
        )
    }
}