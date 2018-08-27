import React, { Component } from "react";
import "./Registration.css";
import Button from "../Button/Button";
import connect from "react-redux";

class Registrationform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      afirstname: "",
      alastname: "",
      aaddress: "",
      acity: "",
      astate: "",
      azip: "",
      email: "",
      phone: ""
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <h1>2018 Discover Your Family Registration</h1>
        <div className="form-container">
          <input
            className="reg-form"
            placeholder="First Name"
            onChange={e => this.setState({ afirstname: e.target.value })}
            value={this.state.afirstname}
          />
          <input
            className="reg-form"
            placeholder="Last Name"
            onChange={e => this.setState({ alastname: e.target.value })}
            value={this.state.alastname}
          />
          <input
            className="reg-form"
            placeholder="Address"
            onChange={e => this.setState({ aaddress: e.target.value })}
            value={this.state.aaddress}
          />
          <input
            className="reg-form"
            placeholder="City"
            onChange={e => this.setState({ acity: e.target.value })}
            value={this.state.acity}
          />
          <input
            className="reg-form"
            placeholder="State"
            onChange={e => this.setState({ astate: e.target.value })}
            value={this.state.astate}
          />
          <input
            className="reg-form"
            placeholder="Zip"
            onChange={e => this.setState({ azip: e.target.value })}
            value={this.state.azip}
          />
          <input
            className="reg-form"
            placeholder="email"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <input
            className="reg-form"
            placeholder="Phone"
            onChange={e => this.setState({ phone: e.target.value })}
            value={this.state.phone}
          />
        </div>
        <Button action="">Register</Button>
      </div>
    );
  }
}

console.log(this.state);
export default Registrationform;
