import React, { Component } from "react";

export default class Home extends Component {
  render() {
    document.title='RootsTech';

    return (
      <div className="landing">
        <div className="landing-hero">
        <img className="landing-hero-img" src='../images/landing/london.jpg' alt='London'/>
          <div className="overlay-promo">
            RootsTech Expands to London in 2019
          </div>
          <div className="overlay-promo-subtitle">
            24-26 October 2019 | ExCel London Convention Center | London,
            England
          </div>
          <div className="overlay-promo-text">
            We’re thrilled to announce that RootsTech is expanding to
            international borders! Mark your calendars, and plan to join us for
            3 exciting days of discovery and family connections in one of the
            world’s most historic cities.
          </div>
        </div>
        <section className="land-prepare">
          <div className="prep-title">Preparing for RootsTech 2019</div>
          <div className="prep-boxes-container">
            <div className="prep-box">
              <img
                className="prep-images"
                src="../images/exhibitor.jpg"
                alt="exhibit"
              />
              <div className="prep-text">
                <h2>Be an Exhibitor at RootsTech 2019</h2>
                <p>
                  Join us as an exhibitor or sponsor at the world’s largest
                  genealogy conference! Get ready to make sales, interact with
                  customers, and grow your brand. Apply today!
                </p>
              </div>
            </div>
            <div className="prep-box">
              <img
                className="prep-images"
                src="../images/reasons.jpg"
                alt="reasons"
              />
              <div className="prep-text">
                <h2>9 Reasons to Attend RootsTech 2019</h2>
                <p>
                  From informative classes to inspirational keynotes and a
                  gigantic expo hall, we’ve got something we’re sure you’ll
                  love.
                </p>
              </div>
            </div>
            <div className="prep-box">
              <img
                className="prep-images"
                src="../images/bookroom.jpg"
                alt="Book a room"
              />
              <div className="prep-text">
                <h2>Book Your Room</h2>
                <p>
                  Various hotels are offering reduced rates for RootsTech
                  attendees. Make your reservation today!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="save-the-date-container">
          <div className="save-the-date-image-box">
            <img
              className="save-date-img"
              src="../images/savethedate.jpg"
              alt="save the date"
            />
          </div>
          <div className="save-date-text-container">
            <div className="save-date">SAVE THE DATE </div>
            <div className="save-date-title">
              Registration for RootsTech 2019 opens September20!
            </div>
            <div className="save-date-text">
              Registration for RootsTech 2019, happening February 27–March 2,
              2019, opens on Thursday, September 20, 2018! For a limited time,
              exclusive early bird pricing will be available on RootsTech
              passes. Mark your calendars, and be one of the first to register
              for the world’s largest family history event!
            </div>
          </div>
        </section>
        <section className="home-reasons">
          <div className="home-reasons-title">
            3 Reasons to Attend RootsTech 2019
          </div>
          <div className="home-expo-features-wrapper">
            <div className="home-expo-feature-box">
              <a href="/#/courses">
                <img
                  className="home-expo-feature-image home-expect-image"
                  src="../images/about/breakouts.jpg"
                  alt="Breakouts"
                />
              </a>
              <a href="/#/courses">
                <h2>300+ Breakout Sessions</h2>
                <p>
                  At RootsTech, learning is priority number one. Choose from
                  over 300 classes taught by industry experts, professional
                  genealogists, and experienced storytellers. Learn about the
                  tools, resources, and methods available to uncover and share
                  your family’s story.
                </p>
              </a>
            </div>
            <div className="home-expo-feature-box">
              <a href="/#/expohall">
                <img
                  className="home-expo-feature-image home-expect-image"
                  src="../images/about/expohall.jpg"
                  alt="Expo Hall"
                />
              </a>
              <a href="/#/expohall">
                <h2>Expo Hall</h2>
                <p>
                  The Expo Hall features more than 200 companies offering
                  products and services designed to help you discover and
                  connect with family. Enjoy demonstrations, free swag, and the
                  opportunity to test out the latest family history tech!
                </p>
              </a>
            </div>
            <div className="home-expo-feature-box">
              <a href="/#/presenters">
                <img
                  className="home-expo-feature-image home-expect-image"
                  src="../images/about/Keynote.jpg"
                  alt="Presenters"
                />
              </a>
              <a href="/#/presenters">
                <h2>Inspirational Keynote Sessions</h2>
                <p>
                  Be inspired and uplifted by an all-star lineup of keynote
                  speakers. Past keynotes include: LeVar Burton, The Property
                  Brothers, and Scott Hamilton. Stay tuned for announcements
                  regarding the 2019 keynote speaker lineup!
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
