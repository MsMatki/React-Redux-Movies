import React, { Component } from 'react';
import Header from './Header'
import GenreTv from './GenreTvContainer'
import MovieContainer from './MovieContainer'
import $ from "jquery";

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

export default class TvShows extends Component{

    state = {
        query:'',
        searchedTvShows:[]
      }
    
      componentDidMount(){
        this.mostPopular()
        this.resetQuery();
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

      updateQuery = (query) => {
        this.setState({
          query: query
        })
        this.searchTvShows()
        
      }

    searchTvShows = () => {
        const {query} = this.state;
      //if query is empty set default upcoming movies
      if(query === ''){
        this.mostPopular()
      }else{
      const url = `${api}/search/tv?api_key=${apiKey}&query=${query}`
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        //remove error on empty string, and set movies to default upcoming
      if(data.results.error){
          this.mostPopular()
      }else{
      this.setState({searchedTvShows: data.results})
      console.log(this.state.searchedTvShows)
      }
      }).catch(error => console.log('Cant fetch any data', error))
    }
    }

    mostPopular = () => {
        $('.card').addClass('active')
        const url = `${api}/tv/popular?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedTvShows: data.results})
        console.log(data.results)
        }).catch(error => console.log('Cant fetch any data', error))
      }
      
    
      topRated = () => {
        const url = `${api}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedTvShows: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }

      tvOnTheAir = () => {
        const url = `${api}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedTvShows: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }

      airingToday = () => {
        const url = `${api}/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedTvShows: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }


    render(){
        return(
            <div>
                <Header query={this.state.query} updateQuery={this.updateQuery}/>
                <GenreTv 
                    mostPopular={this.mostPopular}
                    topRated={this.topRated}
                    tvOnTheAir={this.tvOnTheAir}
                    airingToday={this.airingToday}
                    setActive={this.setActive}
                    />
                <MovieContainer searchedMovies={this.state.searchedTvShows}/>
            </div>
        )
    }
}