import React, { Component } from 'react';
import movieLogo from './img/movie-logo.png'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Movies from './movieContainer'
import {DebounceInput} from 'react-debounce-input';



const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

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
            <li><a href="#about" className="tag" onClick={(event) => this.upcoming(event.target.value)}>Upcoming</a></li>
            <li><a href="#skills" className="tag" onClick={(event) => this.topRated(event.target.value)}>Top Rated</a></li>
            <li><a href="#portfolio" className="tag"  onClick={(event) => this.mostPopular(event.target.value)}>Popular</a></li>
            <li><a href="#contact" className="tag" onClick={(event) => this.kidsPopular(event.target.value)}>Kids</a></li>
            <li><a href="#contact" className="tag" onClick={(event) => this.dramas(event.target.value)}>Drama</a></li>
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
