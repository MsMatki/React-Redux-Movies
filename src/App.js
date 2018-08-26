import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import TvShows from './components/TvShows'
import Movies from './components/Movies'
import MovieInfo from './components/MovieInfo'
import {Provider} from 'react-redux'
import store from './store/store'


class App extends Component {

 
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
        <MovieInfo/>
         )}/> 
      
      <footer className="main-footer">
        <h4>Designed & developed by Bartol Bilankov</h4>
      </footer>
      </div>
      </Provider>
    );
  }
}

export default App;
