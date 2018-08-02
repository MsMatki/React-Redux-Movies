import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import TvShows from './TvShows'
import Movies from './Movies'
import MovieInfo from './MovieInfo'


class App extends Component {


  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => (
        <Movies/>
    )} />
     <Route path="/TvShows" render={() => (
         <TvShows/>
        )}/>
      <Route path="/MovieInfo" render={() => (
         <MovieInfo/>
        )}/>  
      
      </div>
    );
  }
}

export default App;
