import React, { Component } from "react";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import logo from "../../images/RT_logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false
    };
  }

  showMenu() {
    let menuBtn = document.querySelector(".menu-btn");
    this.setState({
      menuShow: !this.state.menuShow
    });
    if (!this.state.menuShow) {
      menuBtn.classList.add("close");
    } else {
      menuBtn.classList.remove("close");
    }
  }

  handleClickOutside() {
    let menuBtn = document.querySelector(".menu-btn");
    this.setState({ menuShow: false });
    menuBtn.classList.remove("close");
  }

  render() {

    return (
      <div>
        <div className="navbar fixed-top">
          <div className="company-container">

              <img className="c-logo" src={logo} alt="logo" />

            <div className="menu-box">
              <span className="menu-header-date">Feb. 27-Mar. 2, 2019</span>
              <div className="menu-items-holder" onClick={() => this.showMenu()}>
                <div className="menu-btn" >
                  <div className="btn-line" />
                  <div className="btn-line" />
                  <div className="btn-line" />
                </div>
                <div className="menu-header-word">Menu</div>

              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (this.state.menuShow ? "dropDownShow" : "dropDownNoShow") +
            " dropdown"
          }
        >
          <div className="navbar-header-links">
          <div className="navbar-header-link-words">
            <div className="navbar-header-link-word">Blog</div>
            <Link to="/overview">
              <div
                className="navbar-header-link-word"
                onClick={() => this.showMenu()}
              >
                Why Attend RootsTech
              </div>
            </Link>
            <div className="navbar-header-link-word">Family Discovery Day</div>
            <Link to="/expohall">
              <div
                className="navbar-header-link-word"
                onClick={() => this.showMenu()}
              >
                Expo Hall
              </div>
            </Link>
            <div className="navbar-header-link-word">London</div>
            </div>
            <div className="navbar-icons">
            <i className="fas fa-search "></i>
            <i className="fab fa-twitter "></i>
            <i className="fab fa-facebook "></i>
            </div>
          </div>
          <div className="navbar-column-link-wrapper">
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Conference Features</div>
              <Link to="/overview">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Conference Overview
                </div>
              </Link>
              <div className="navbar-column-link">Family Discovery Day</div>
              <Link to="/expohall">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Expo Hall
                </div>
              </Link>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Agenda</div>
              <Link to="/courses">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Schedule
                </div>
              </Link>
              <Link to="/presenters">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Speakers
                </div>
              </Link>
              <Link to="/events">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Events
                </div>
              </Link>
              <Link to="/labs">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  Labs
                </div>
              </Link>
              <div className="navbar-column-link">Live Stream Schedule</div>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Get Involved</div>
              <div className="navbar-column-link">Exhibitors and Sponsors</div>
              <div className="navbar-column-link">Hotels</div>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">About RootsTech</div>
              <Link to="/about">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  About
                </div>
              </Link>
              <Link to="/faqs">
                <div
                  className="navbar-column-link"
                  onClick={() => this.showMenu()}
                >
                  FAQ
                </div>
              </Link>
              <div className="navbar-column-link">Library</div>
              <div className="navbar-column-link">RootsTech 2018 Videos</div>
            </div>
            <div className="navbar-column-link-box">
              <div className="navbar-column-title">Topics</div>
              <div className="navbar-column-link">DNA</div>
              <div className="navbar-column-link">Technology</div>
              <div className="navbar-column-link">LDS Resources</div>
              <div className="navbar-column-link">Heirlooms</div>
              <div className="navbar-column-link">Genealogy</div>
              <div className="navbar-column-link">Census</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Navbar);
// Eric was here