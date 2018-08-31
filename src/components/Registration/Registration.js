import React, { Component } from "react";
import Login from "../Login/Login";

class Registration extends Component {
  render() {
    return (
      <div className='registration-wrapper'>
        <div reg-title>Registration Page</div>
        <Login />
      </div>
    );
  }
}

export default Registration;
