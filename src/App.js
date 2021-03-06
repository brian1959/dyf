import React, { Component } from "react";
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import routes from "./routes";



class App extends Component {
  render() {
    window.scrollTo(0,0)
    return (
      <div>
        <Navbar/>
        {/* <Header /> */}
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
