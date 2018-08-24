import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {DebounceInput} from 'react-debounce-input';
import { Link } from 'react-router-dom'

export default class Header extends Component{

    state = {
        sidebar:'closed',
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

    render(){
        return(
            <header className="header">
            <div className="wrapper" id="wrap">
            <nav className="navigation">
              <div className="menu"><FontAwesomeIcon icon={faBars} onClick={this.openCloseMenu}/>
              </div>
              <div className="main-heading" id="name">
                <h1>Cool<span>Movies</span>BB</h1>
              </div>
              <ul className="topnav" id="nav">
              <li><Link to="/">Movies</Link></li>
                <li><Link to="/TvShows" >Tv Shows</Link></li>
                  <li>
                    <DebounceInput
                    element="input" 
                    debounceTimeout={400} 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.query}
                    onChange={(event) => this.props.searchData(event.target.value)}/>
                  </li>
              </ul>
            </nav>
          </div>
        </header>
        )
    }
}