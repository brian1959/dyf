import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";
import Navbar from "./components/NavBar/Navbar";
// import "./reset.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <nav className="nav">
          {routes}
        </nav>
        <div className="welcome">Hello to all coders!</div>
      </div>
    );
  }
}

export default App;
