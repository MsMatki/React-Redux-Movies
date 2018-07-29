import React, { Component } from 'react';

export default class Movies extends Component{



    render(){
        const {movie} = this.props
        let poster = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
        
       const styles = {width: '100%', height: '100%', backgroundImage:poster ? (`url(${poster})`) : null }
        return(
                <div className="movie-item">
                    <div className="movie-cover" style={styles}>

                    </div>
                </div>
        )
    }
}

/*http://image.tmdb.org/t/p/w185//nLRcqfvSYj2AKy9aG10Dx6bxUsS.jpg*/