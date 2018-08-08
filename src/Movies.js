import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer'
import Header from './Header'
import GenreMovie from './GenreMovieContainer'
import $ from "jquery";
import {connect} from 'react-redux'
import {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies} from './actions/movieActions'

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

class Movies extends Component{

   state = {
     query:''
   }
    
    componentDidMount(){
      //set upcoming movies as a default
      this.props.upcoming()
      this.resetQueryOnClick()
    
    }
    
    resetQueryOnClick = () => {
      let list = document.querySelectorAll('.list li')
      list.forEach((li) => {
        li.addEventListener('click', () => {
          this.setState({
            query: ''
          })
        })
      })
    }
    
    resetQuery = () => {
      this.setState({
        query: ''
      })
    }
    
    componentDidUpdate(){
      this.setActive()
    }
    
    setActive = () => {
        let {query} = this.state
            if(query !== ''){
              $('.list .active').removeClass('active');
            }
            $('.list li').click(function () {
              $('.list .active').removeClass('active');
              $(this).addClass('active');
            }) 
      }

    render(){
        return(
            <div>
                <Header query={this.state.query} 
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
                <MovieContainer movies={this.props.movies} movieInfo={this.props.GetMovieInfo}/>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
  movies: state.movies.searchedMovies,
})

export default connect(mapStateToProps, {mostPopular, upcoming, topRated, kidsPopular, nowPlaying, searchMovies})(Movies)