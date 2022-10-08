import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default class NavBar extends Component {
  render() {
    return (
    <React.Fragment>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact={true} to="/" activeClassName='active' className="nav-link">Home</NavLink>
          </li>
        </ul>
      </div> 
    </React.Fragment>
  )};
}

NavBar.contextType = AuthContext;
