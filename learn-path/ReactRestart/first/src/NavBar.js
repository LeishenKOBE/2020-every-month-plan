import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="concat">Concat</Link>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
