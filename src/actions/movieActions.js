import {FETCH_POPULAR, FETCH_UPCOMING, FETCH_TOP_RATED, FETCH_KIDS_POPULAR, FETCH_NOW_PLAYING, FETCH_SEARCH, FETCH_TV_POPULAR, FETCH_TV_TOP_RATED, FETCH_TV_ON_THE_AIR, FETCH_TV_AIRING_TODAY, FETCH_TV_SEARCH} from './types'
import $ from 'jquery';


const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'


export const mostPopular = () => dispatch => {
    const url = `${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_POPULAR,
        payload: movies.results
    }))
}

export const upcoming = () => dispatch => {
    $('.list .card').addClass('active');
    const url = `${api}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_UPCOMING,
        payload: movies.results
    }))
}

export const topRated = () => dispatch => {
    const url = `${api}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_TOP_RATED,
        payload: movies.results
    }))
}

export const kidsPopular = () => dispatch => {
    const url = `${api}/discover/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_KIDS_POPULAR,
        payload: movies.results
    }))
}

export const nowPlaying = () => dispatch => {
    const url = `${api}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_NOW_PLAYING,
        payload: movies.results
    }))
}

export const searchMovies = (query) => dispatch => {
const url = `${api}/search/movie?api_key=${apiKey}&query=${query}`

if(query === ''){
    dispatch(upcoming())
  }else{
    $('.list .active').removeClass('active');

fetch(url)
.then(response => response.json())
.then((movies) => {
  //remove error on empty string, and set movies to default upcoming
if(movies.results.error){
    dispatch(upcoming())
}else{
dispatch({
    type:FETCH_SEARCH,
    payload: movies.results
})
}
}).catch(error => console.log('Cant fetch any data', error))
  }
}

// Tv shows actions 
export const tvPopular = () => dispatch => {
    $('.list .card').addClass('active');
const url = `${api}/tv/popular?api_key=${apiKey}&language=en-US&page=1`
fetch(url)
.then(response => response.json())
.then(shows => dispatch({
    type:FETCH_TV_POPULAR,
    payload: shows.results
}))
}

export const tvTopRated = () => dispatch => {
    const url = `${api}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(shows => dispatch({
        type:FETCH_TV_TOP_RATED,
        payload: shows.results
    }))
  }

  export const tvOnTheAir = () => dispatch => {
    const url = `${api}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(shows => dispatch({
        type:FETCH_TV_ON_THE_AIR,
        payload: shows.results
    }))
  }

  export const airingToday = () => dispatch => {
    const url = `${api}/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(shows => dispatch({
        type:FETCH_TV_AIRING_TODAY,
        payload: shows.results
    }))
  }

  export const searchTvShows = (query) => dispatch => {
    const url = `${api}/search/tv?api_key=${apiKey}&query=${query}`
  //if query is empty set default upcoming movies
  if(query === ''){
    dispatch(tvPopular())
  }else{
     $('.list .active').removeClass('active');

  fetch(url)
  .then(response => response.json())
  .then((shows) => {
    //remove error on empty string, and set movies to default upcoming
  if(shows.results.error){
     dispatch(tvPopular())
  }else{
    dispatch({
        type:FETCH_TV_SEARCH,
        payload: shows.results
    })
  }
  }).catch(error => console.log('Cant fetch any data', error))
}
}
