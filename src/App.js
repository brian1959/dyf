import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import routes from "./routes";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='header-spacer' />
        <div className="body-spacing">
        
          {routes}
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
