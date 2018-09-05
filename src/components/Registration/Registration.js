import React, { Component } from "react";
import Login from "../Login/Login";

class Registration extends Component {
  render() {
    return (
      <div className="registration-wrapper">
        <div className="reg-sidebar-wrapper">
          <div className="reg-info-box">
            <h2>Pages</h2>
            <a href="">
              <span>Public Registration</span>
            </a>
          </div>
          <div className="reg-info-box">
            <h2>Registration</h2>
            <a href="">
              <span>Login</span>
            </a>
          </div>
          <div className="reg-info-box">
            <h2>Event Information</h2>
            <a href="/#/overview">
              <span>RootsTech 2019</span>
            </a>
          </div>
          <div className="reg-info-box">
            <h2>Registration Support</h2>
            <a href="">
              <span>Email Registration Support</span>
            </a>
          </div>
        </div>
        <div className="reg-landing-wrapper">
          <div className="reg-title">RootsTech 2019 Registration</div>
          <div className="reg-instruction">Registration for Rootstech Salt Lake City 2018 is now closed. Please watch for updates concerning Rootstech Salt Lake City 2019 registration.</div>
          <Login />
        </div>
      </div>
    );
  }
}

export default Registration;
