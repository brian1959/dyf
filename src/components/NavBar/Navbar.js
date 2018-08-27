import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_top">
        <Link to="/registration">
          <Button className="btn">Registration</Button>
        </Link>
        <Link to="/courses">
          <Button className="btn">Courses</Button>
        </Link>
        <Link to="/presenters">
          <Button className="btn">Presenters</Button>
        </Link>
        <Link to="/products">
          <Button className="btn">Products</Button>
        </Link>
        <Link to="/">
          <Button className="btn">Home</Button>
        </Link>
      </div>
    );
  }
}
