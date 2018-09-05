import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_top">
        <div className="nav-main-links">
        <ul>
          <li>Blog</li>
          <Link to='/#/overview'>
          <li>Why Attend RootsTech</li></Link>
          <li>Family Discovery Day</li>
          <Link to='/#/expohall'><li>Expo Hall</li></Link>
          <li>London</li>
        </ul>
        </div>
       

      </div>
    );
  }
}
