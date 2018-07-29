import React, { Component } from 'react';
import movieLogo from './img/movie-logo.png'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Movies from './movieContainer'
import {DebounceInput} from 'react-debounce-input';

class App extends Component {

  state = {
    sidebar:'closed',
    query:'',
    searchedMovies:[]
  }



  updateQuery = (query) => {
    this.setState({
      query: query
    })

    if(query === ''){
      this.setState({
        searchedMovies: []
      })
    }else{

    const api = 'https://api.themoviedb.org/3'
    const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'
    const url = `${api}/search/movie?api_key=${apiKey}&query=${query}`

    fetch(url)
    .then(response => response.json())
    
    .then((data) => {
    if(data.results.error){
      this.setState({
        searchedMovies: []
      })
    }else{
    this.setState({searchedMovies: data.results})
    console.log(this.state.searchedMovies)
    }
    }).catch(error => console.log('Cant fetch any data', error))
  }
  }


  openCloseMenu = () => {
    let ul = document.querySelector('.topnav')
      if(this.state.sidebar === 'closed'){
      ul.classList.add('response');
      this.setState({sidebar: 'open'})
      }else{
        ul.classList.remove('response');
        this.setState({sidebar: 'closed'})
      }
  }

  render() {
    return (
      <div className="App">
       <header className="header">
        <div className="wrapper" id="wrap">
        <nav className="navigation">
          <div className="menu"><FontAwesomeIcon icon={faBars} onClick={this.openCloseMenu}/>
          </div>
          <div className="main-logo" id="name">
            <img src={movieLogo} alt="movie logo"/>
          </div>
          <ul className="topnav" id="nav">
            <li>
              <DebounceInput
              element="input" 
              debounceTimeout={250} 
              type="text" 
              placeholder="Search" 
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
              
            </li>
            <li><a href="#about" className="tag">Upcoming</a></li>
            <li><a href="#skills" className="tag">Top Rated</a></li>
            <li><a href="#portfolio" className="tag">Popular</a></li>
            <li><a href="#contact" className="tag">Latest</a></li>
          </ul>
        </nav>
      </div>
    </header>

<section className="background">

</section>
<div className="movie-container">
    {this.state.searchedMovies.map((movie) => (
    <Movies 
      key={movie.id}
      movie={movie}
      />
    ))}
</div>
      </div>
    );
  }
}

export default App;
