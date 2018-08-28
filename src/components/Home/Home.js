import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-hero">
          <img
            className="landing-hero"
            src="../images/Landing/hero.jpg"
            alt="expo hall" width='189%'
          />
          <div className="hero-h1">
          Be an Exhibitor at RootsTech 2019
          </div>
          <section className='land-prepare'>
            <div className='prep-title'>Preparing for RootsTech 2019</div>
            <div className="prep-boxes">
            <div className="prep-images"></div>
            <div className="prep-images"></div>
            <div className="prep-images"></div>
            <div className="prep-text"></div>
            <div className="prep-text"></div>
            <div className="prep-text"></div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
