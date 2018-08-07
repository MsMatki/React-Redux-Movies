import {FETCH_POPULAR, FETCH_UPCOMING, FETCH_TOP_RATED, FETCH_KIDS_POPULAR, FETCH_NOW_PLAYING} from './types'

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