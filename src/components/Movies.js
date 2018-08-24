import React, { Component } from 'react';
import MovieContainer from './MovieContainer'
import Header from './Header'
import GenreMovie from './GenreMovieContainer'
import $ from "jquery";
import {connect} from 'react-redux'
import {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies} from '../actions/movieActions'


class Movies extends Component{

    componentDidMount(){
      //set upcoming movies as a default
      this.props.upcoming()
    }

    setFetchMovies(){
      sessionStorage.setItem('Page', 'movie');
      return false;
      }
    
    componentDidUpdate(){
      this.setActive()
    }
    
    setActive = () => {
            $('.list li').click(function () {
              $('.list .active').removeClass('active');
              $(this).addClass('active');
            }) 
      }

    render(){
        return(
            <div>
                <Header 
                searchData={this.props.searchMovies}

                />
                    <GenreMovie 
                        mostPopular={this.props.mostPopular}
                        upcoming={this.props.upcoming}
                        topRated={this.props.topRated}
                        kidsPopular={this.props.kidsPopular}
                        nowPlaying={this.props.nowPlaying}
                        setActive={this.setActive}
                    />
                <MovieContainer movies={this.props.movies} setPage={this.setFetchMovies}/>
  
            </div>
        )
    }
}


const mapStateToProps = state => ({
  movies: state.movies.searchedMovies,
})

export default connect(mapStateToProps, {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies})(Movies)