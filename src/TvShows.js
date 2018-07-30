import React, { Component } from 'react';
import Header from './Header'
import Subheader from './Subheader'
import MovieContainer from './MovieContainer'

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

export default class TvShows extends Component{

    state = {
        query:'',
        searchedTvShows:[]
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
        this.upcoming()
      }else{
      const url = `${api}/search/tv?api_key=${apiKey}&query=${query}`
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        //remove error on empty string, and set movies to default upcoming
      if(data.results.error){
          this.upcoming()
      }else{
      this.setState({searchedTvShows: data.results})
      console.log(this.state.searchedTvShows)
      }
      }).catch(error => console.log('Cant fetch any data', error))
    }
    }

    render(){
        return(
            <div>
                <Header query={this.state.query} updateQuery={this.updateQuery}/>
                <Subheader 
                    mostPopular={this.mostPopular}
                    upcoming={this.upcoming}
                    topRated={this.topRated}
                    kidsPopular={this.kidsPopular}
                    dramas={this.dramas}
                    />
                <MovieContainer searchedMovies={this.state.searchedTvShows}/>
            </div>
        )
    }
}