import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer'
import Header from './Header'
import GenreMovie from './GenreMovieContainer'
import $ from "jquery";

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

export default class Movies extends Component{

    state = {
        query:'',
        searchedMovies:[]
      }
    
    componentDidMount(){
      //set upcoming movies as a default
      this.upcoming()
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
    
      updateQuery = (query) => {
        this.setState({
          query: query
        })
        this.searchMovies()
        
      }
    
        searchMovies = () => {
          const {query} = this.state;
        //if query is empty set default upcoming movies
        if(query === ''){
          this.upcoming()
        }else{
        const url = `${api}/search/movie?api_key=${apiKey}&query=${query}`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
          //remove error on empty string, and set movies to default upcoming
        if(data.results.error){
            this.upcoming()
        }else{
        this.setState({searchedMovies: data.results})
        console.log(this.state.searchedMovies)
        }
        }).catch(error => console.log('Cant fetch any data', error))
      }
      }
    
      mostPopular = () => {
        const url = `${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedMovies: data.results})
        console.log(data.results)
        }).catch(error => console.log('Cant fetch any data', error))
      }
      
      
      upcoming = () => {
        $('.card').addClass('active')
        const url = `${api}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedMovies: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }
    
      topRated = () => {
        const url = `${api}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedMovies: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }
    
      kidsPopular = () => {
        const url = `${api}/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedMovies: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }
    
      nowPlayng = () => {
        const url = `${api}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
        fetch(url)
        .then(response => response.json())
        .then((data) => {
        this.setState({searchedMovies: data.results})
        }).catch(error => console.log('Cant fetch any data', error))
      }



    render(){
        return(
            <div>
                <Header query={this.state.query} 
                updateQuery={this.updateQuery}
                />
                    <GenreMovie 
                        mostPopular={this.mostPopular}
                        upcoming={this.upcoming}
                        topRated={this.topRated}
                        kidsPopular={this.kidsPopular}
                        nowPlayng={this.nowPlayng}
                        setActive={this.setActive}
                    />
                <MovieContainer searchedMovies={this.state.searchedMovies}/>
            </div>
        )
    }
}