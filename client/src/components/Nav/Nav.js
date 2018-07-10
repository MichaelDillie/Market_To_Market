import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import Auth from "../../auth/Auth.js";

const auth = new Auth();
class Nav extends Component {
  render() {
    const { isAuthenticated } = auth;
    return(
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link all-events-link" to="/all-events">All Events <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
        <div>
          {
            isAuthenticated() ? 
              (
                <div>
                  <button onClick={() => auth.logout()}>Log Out</button>
                </div>
              )
            :
              (
                <div>
                  <button onClick={() => auth.login()}>Login</button>
                </div>
              )
          }
        </div>
      </nav>
    );
  }
}

export default Nav;