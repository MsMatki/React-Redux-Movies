import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default class GenreTv extends Component{

    componentDidMount(){
       this.props.setActive()
    }

    render(){
        return(
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
        <div className="suggestion"><h4>Suggestion</h4><span className="angle-left"><FontAwesomeIcon icon={faAngleRight}/></span></div>
            <li className="card active" onClick={(event) => this.props.tvPopular(event.target.value)}>Popular</li>
            <li className="" onClick={(event) => this.props.tvTopRated(event.target.value)}>Top Rated</li>
            <li className="" onClick={(event) => this.props.tvOnTheAir(event.target.value)}>Tv On The Air</li>
            <li className="" onClick={(event) => this.props.airingToday(event.target.value)}>Tv Airing Today</li>
        </ul>
      </div>
      
    </section>
        )
    }
}