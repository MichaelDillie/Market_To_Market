import React, { Component } from 'react';
import "./Nav.css"
import Auth from "../../auth/Auth.js";

const auth = new Auth();
class Nav extends Component {
  render() {
    const { isAuthenticated } = auth;
    return(
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" >Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" >All Events <span className="sr-only">(current)</span></a>
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