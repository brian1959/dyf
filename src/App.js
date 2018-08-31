import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./routes";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='header-spacer' />
          {routes}
        
        <div className="welcome">Hello to all coders!</div>
      </div>
    );
  }
}

export default App;
