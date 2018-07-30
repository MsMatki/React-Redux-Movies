import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default class Subheader extends Component{
    render(){
        return(
    <section className="subheader">
      <div className="genre-container">
        <ul>
            <div className="suggestion"><h4>Suggestion</h4><span className="angle-left"><FontAwesomeIcon icon={faAngleRight}/></span></div>
            <li onClick={(event) => this.props.upcoming(event.target.value)}>Upcoming</li>
            <li onClick={(event) => this.props.topRated(event.target.value)}>Top Rated</li>
            <li onClick={(event) => this.props.mostPopular(event.target.value)}>Popular</li>
            <li onClick={(event) => this.props.kidsPopular(event.target.value)}>Kids</li>
            <li onClick={(event) => this.props.dramas(event.target.value)}>Drama</li>
        </ul>
      </div>
    </section>
        )
    }
}