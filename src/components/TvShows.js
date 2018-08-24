import React, { Component } from 'react';
import Header from './Header'
import GenreTv from './GenreTvContainer'
import MovieContainer from './MovieContainer'
import $ from "jquery";
import {connect} from 'react-redux'
import {tvPopular, tvTopRated, tvOnTheAir, airingToday, searchTvShows} from '../actions/movieActions'


class TvShows extends Component{
   

      componentDidMount(){
        this.props.tvPopular()
      }

      setFetchShow(){
        sessionStorage.setItem('Page', 'tv');
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
                <Header searchData={this.props.searchTvShows}/>
                <GenreTv 
                    tvPopular={this.props.tvPopular}
                    tvTopRated={this.props.tvTopRated}
                    tvOnTheAir={this.props.tvOnTheAir}
                    airingToday={this.props.airingToday}
                    setActive={this.setActive}
                    />
                <MovieContainer movies={this.props.movies} setPage={this.setFetchShow}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  movies: state.movies.searchedTvShows,
})

export default connect(mapStateToProps, {tvPopular, tvTopRated, tvOnTheAir, airingToday, searchTvShows})(TvShows)