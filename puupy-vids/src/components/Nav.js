import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, loggedOut, isLoggedIn } from '../utils/AuthService';

import '../App.css';

export default class Nav extends Component { 
  render() { 
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <link className="navbar-brand" to="/">Puppy Flix</link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Videos</Link>
          </li>
          <li>
            {
              (isLoggedIn() )? <Link to="/upload">Upload Videos</Link> : ''
            }
          </li>
        </ul>
        <ul className="nav navbar-right navbar-nav">
          <li>
            {
              (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}>Log Out</button>) : (<button className="btn btn-info log" onClick={()=>login()}>Log In</button>)
            }
          </li>
        </ul>
      </nav>
    );
  }
}