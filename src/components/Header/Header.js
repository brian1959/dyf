import React, { Component } from "react";
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
          <div className="menu-btn">
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <div className="menu-word">Menu</div>
        </div>
      </div>
    );
  }
}
