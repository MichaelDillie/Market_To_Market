import React, { Component } from 'react';
import "./Nav.css"

class Nav extends Component {

  render() {
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
      </nav>
    );
  }
}

export default Nav;