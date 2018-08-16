import React, { Component } from 'react';
import Header from './Header'
import GenreTv from './GenreTvContainer'
import MovieContainer from './MovieContainer'
import $ from "jquery";
import {connect} from 'react-redux'
import {tvPopular, tvTopRated, tvOnTheAir, airingToday, searchTvShows} from './actions/movieActions'


class TvShows extends Component{
    
      componentDidMount(){
        this.props.tvPopular()
        this.resetQuery();
      }

      setFetchShow(){
        sessionStorage.setItem('Page', 'tv');
        return false;
        }


      componentDidUpdate(){
        this.setActive()
      }
      
      setActive = () => {
          let {query} = this.props
              if(query !== ''){
                $('.list .active').removeClass('active');
              }
              $('.list li').click(function () {
                $('.list .active').removeClass('active');
                $(this).addClass('active');
              }) 
        }

      resetQuery = () => {
        let list = document.querySelectorAll('.list li')
        list.forEach((li) => {
          li.addEventListener('click', () => {
            this.setState({
              query: ''
            })
          })
        })
      }



    render(){
      console.log(this.props.movies)
        return(
            <div>
                <Header query={this.props.query} searchData={this.props.searchTvShows}/>
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