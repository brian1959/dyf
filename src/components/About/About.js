import React, { Component } from "react";

export default class About extends Component {


  render() {
    return (
      <div className="about-main">
        <section className="about-header">
          <div className="about-hero">
            <div className="about-image-wrapper">
              <img className='about-image'
                src="../images/about/about.jpg"
                alt="about"
                height="430px"
              />
            </div>
            <div className="about-text-container">
              <div className="about-date">CELEBRATING FAMILIES</div>
              <h1>What Is RootsTech?</h1>
              <p>
              At RootsTech, we believe in the power of family—and discovering your family story has never been easier! RootsTech is a 4-day event held annually in Salt Lake City, Utah, dedicated to celebrating family and discovering family histories. With over 300 breakout expects, an exciting lineup of celebrity speakers, and a gigantic expo hall, we’ve got something we’re sure you’ll love.
              </p>
            </div>
          </div>
        </section>
        <section className="about-expect">
          <div className="about-expect-header-box">
                <img className="about-expect-image"         src="../images/about/roots2017tree.jpg" alt="Classes"
                />
            </div>
          <div className="about-expect-main">What to Expect at RootsTech</div>
          <div className="about-expect-main-text">One of the most important things we’ve learned is that celebrating families knows no limitations. From the newest newbie to the most advanced family historian, there’s a place at RootsTech for everyone who’s interested in discovering their roots.</div>
          <div className="about-expo-features-wrapper">
            <div className="about-expo-feature-box">
              <a href="/#/expohall">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/breakouts.jpg"
                  alt="Discovery"
                />
              </a>
              <a href="/#/expohall">
                <h1>300+ Breakout Sessions</h1>
                <p>
                At RootsTech, learning is priority number one. Choose from over 300 classes taught by industry experts, professional genealogists, and experienced storytellers. Learn about the tools, resources, and methods available to uncover and share your family’s story.
                </p>
              </a>
            </div>
            <div className="about-expo-feature-box">
              <a href="/#/courses">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/expohall.jpg"
                  alt="Expo Hall"
                />
              </a>
              <a href="/#/expohall">
                <h1>Expo Hall</h1>
                <p>
                The Expo Hall features more than 200 companies offering products and services designed to help you discover and connect with family. Enjoy demonstrations, free swag, and the opportunity to test out the latest family history tech!
                </p>
              </a>
            </div>
            <div className="about-expo-feature-box">
              <a href="/#/expohall">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/Keynote.jpg"
                  alt="Coaches Corner"
                />
              </a>

              <a href="/#/speakers">
                <h1>Inspirational Keynote Sessions</h1>
                <p>
                Be inspired and uplifted by an all-star lineup of keynote speakers. Past RootsTech keynote speakers include: LeVar Burton, The Property Brothers, Scott Hamilton, and Buddy “Cake Boss” Valastro.
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="about-experience">
    
        </section>
      </div>
    );
  }
}
