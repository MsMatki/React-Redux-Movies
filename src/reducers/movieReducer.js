import {FETCH_POPULAR, FETCH_UPCOMING, FETCH_TOP_RATED, FETCH_KIDS_POPULAR, FETCH_NOW_PLAYING, FETCH_SEARCH, FETCH_TV_POPULAR, FETCH_TV_TOP_RATED, FETCH_TV_ON_THE_AIR, FETCH_TV_AIRING_TODAY, FETCH_TV_SEARCH} from '../actions/types'

const initialState = {
    searchedMovies:[],
    searchedTvShows:[],
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_UPCOMING:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_TOP_RATED:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_KIDS_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_NOW_PLAYING:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_SEARCH:
        return{
            ...state,
            searchedMovies:action.payload,
          
        };
        //Tv shows
        case FETCH_TV_POPULAR:
        return{
            ...state,
            searchedTvShows:action.payload
        };
        case FETCH_TV_TOP_RATED:
        return{
            ...state,
            searchedTvShows:action.payload
        };
        case FETCH_TV_ON_THE_AIR:
        return{
            ...state,
            searchedTvShows:action.payload
        };
        case FETCH_TV_AIRING_TODAY:
        return{
            ...state,
            searchedTvShows:action.payload
        };
        case FETCH_TV_SEARCH:
        return{
            ...state,
            searchedTvShows:action.payload
        };
        default:
        return state;
    }
}