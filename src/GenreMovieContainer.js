import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default class GenreMovie extends Component{

    componentDidMount(){
       this.props.setActive()
    }

    render(){
        return(
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
            <div className="suggestion"><h4>Suggestion</h4><span className="angle-left"><FontAwesomeIcon icon={faAngleRight}/></span></div>
            <li className="card active" onClick={(event) => this.props.upcoming(event.target.value)}>Upcoming</li>
            <li className="" onClick={(event) => this.props.nowPlaying(event.target.value)}>Cinema</li>
            <li className="" onClick={(event) => this.props.mostPopular(event.target.value)}>Popular</li>
            <li className="" onClick={(event) => this.props.kidsPopular(event.target.value)}>Kids</li>
            <li className="" onClick={(event) => this.props.topRated(event.target.value)}>Top Rated</li>
        </ul>
      </div>
      
    </section>
        )
    }
}