import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer'
import Header from './Header'
import Subheader from './Subheader'
import { Route } from 'react-router-dom'
import TvShows from './TvShows'

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

class App extends Component {

  state = {
    query:'',
    searchedMovies:[]
  }

componentDidMount(){
  //set upcoming movies as a default
  this.upcoming()
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

    const url = `${api}/discover/movie?api_key=${apiKey}&?sort_by=popularity.desc`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
    this.setState({searchedMovies: data.results})
    console.log(data.results)
    }).catch(error => console.log('Cant fetch any data', error))
  }
  
  
  upcoming = () => {
    const url = `${api}/discover/movie?api_key=${apiKey}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
    this.setState({searchedMovies: data.results})
    }).catch(error => console.log('Cant fetch any data', error))
  }

  topRated = () => {
    const url = `${api}/discover/movie?api_key=${apiKey}&certification_country=US&certification=R&sort_by=vote_average.desc`
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

  dramas = () => {
    const url = `${api}/discover/movie?api_key=${apiKey}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
    this.setState({searchedMovies: data.results})
    }).catch(error => console.log('Cant fetch any data', error))
  }

  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => (
        <div>
      <Header query={this.state.query} updateQuery={this.updateQuery}/>
      <Subheader 
      mostPopular={this.mostPopular}
      upcoming={this.upcoming}
      topRated={this.topRated}
      kidsPopular={this.kidsPopular}
      dramas={this.dramas}
      />
      <MovieContainer searchedMovies={this.state.searchedMovies}/>
      </div>
    )} />
     <Route path="/TvShows" render={({ history }) => (
         <TvShows query={this.state.query} 
         updateQuery={this.updateQuery}
         searchedMovies={this.state.searchedMovies}
         />
        )}/>
      </div>
    );
  }
}

export default App;
