import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/RT_logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="hcontainer">
        <div className="company-container">
          <div className="c-logo">
            <img src={logo} alt="logo" height="30px" />
          </div>
        </div>
        <div className="menu-box">
          <span className="header-date">Feb. 27-Mar. 2, 2019</span>
          <div className="menu-items-holder">
            <div className="menu-btn">
              <div className="btn-line" />
              <div className="btn-line" />
              <div className="btn-line" />
            </div>
            <div className="menu-word">Menu</div>
          </div>
        </div>
        <nav className="menu">
          <ul className="menu-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/presenters">Speakers</Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/labs">Labs</Link>
              
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/expohall">Expo Hall</Link>
            </li>
            <li className="nav-item">
              <Link to="/overview">Overview</Link>
                </li>
            <li className="nav-item">
              <Link to="/events">Events</Link>
                </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
                </li>
          </ul>
        </nav>
      </div>
    );
  }
}
