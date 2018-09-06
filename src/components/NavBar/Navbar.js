import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/RT_logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false
    };
  }
  showMenu() {
    this.setState({
      menuShow: !this.state.menuShow
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="navbar fixed-top">
          <section className="company-container">
            <div className="c-logo">
              <img src={logo} alt="logo" height="30px" />
            </div>
            <div className="menu-box">
              <span className="header-date">Feb. 27-Mar. 2, 2019</span>
              <div
                className="menu-items-holder"
                onClick={() => this.showMenu()}
              >
                <div className="menu-btn">
                  <div className="btn-line" />
                  <div className="btn-line" />
                  <div className="btn-line" />
                </div>
                <div className="menu-word">Menu</div>
              </div>
            </div>
          </section>
        </div>
        <div
          className={(this.state.menuShow ? "dropDownShow" : "") + " dropdown"}
        >
          <div className="navbar-header-links">
            <ul>
              <li>Blog</li>
              <Link to='/overview'><li onClick={()=> this.setState({menuShow:false })}>Why Attend RootsTech</li></Link>
              <li>Family Discovery Day</li>
             <Link to='/expohall'> <li onClick={()=> this.setState({menuShow:false }) }>Expo Hall</li></Link>
              <li>London</li>
            </ul>
          </div>
          <div className="navbar-body-wrapper">
            <div className="navbar-column-header-wrapper">
              <div className="navbar-column-title">Conference Features</div>
              <div className="navbar-column-title">Agenda</div>
              <div className="navbar-column-title">Get Involved</div>
              <div className="navbar-column-title">About RootsTech</div>
              <div className="navbar-column-title">Topics</div>
            </div>
            <div className="navbar-column-link-wrapper">
              <div className="navbar-column-link-box">
                <Link to="/overview">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Conference Overview</div>
                </Link>
                <div className="navbar-column-link">Family Discovery Day</div>
                <Link to="/expohall">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Expo Hall</div>
                </Link>
              </div>
              <div className="navbar-column-link-box">
                <Link to="/courses">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Schedule</div>
                </Link>
                <Link to="/presenters">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Speakers</div>
                </Link>
                <Link to="/events">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Events</div>
                </Link>
                <Link to="/labs">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>Labs</div>
                </Link>
                <div className="navbar-column-link">Live Stream Schedule</div>
              </div>
              <div className="navbar-column-link-box">
                <div className="navbar-column-link">
                  Exhibitors and Sponsors
                </div>
                <div className="navbar-column-link">Hotels</div>
              </div>
              <div className="navbar-column-link-box">
                <Link to="/about">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>About</div>
                </Link>
                <Link to="/faq">
                  <div className="navbar-column-link" onClick={()=> this.setState({menuShow:false }) }>FAQ</div>
                </Link>
                <div className="navbar-column-link">Library</div>
                <div className="navbar-column-link">RootsTech 2018 Videos</div>
              </div>
              <div className="navbar-column-link-box">
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
      </div>
    );
  }
}
