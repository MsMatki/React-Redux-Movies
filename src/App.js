import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import TvShows from './TvShows'
import Movies from './Movies'
import MovieInfo from './MovieInfo'
import {Provider} from 'react-redux'
import store from './store'


class App extends Component {

  state = {
    movieInfo:[]
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Route exact path="/" render={() => (
        <Movies/>
    )} />
     <Route path="/TvShows" render={() => (
         <TvShows/>
        )}/>
     <Route path="/MovieInfo" render={() => (
                <MovieInfo movieInfo={this.props.movieInfo}/>
         
         )}/> 
      
      </div>
      </Provider>
    );
  }
}

export default App;
