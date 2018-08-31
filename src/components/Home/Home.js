import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-hero">
          <div className="overlay-promo">
            RootsTech Expands to London in 2019
          </div>
          <div className="overlay-promo-subtitle">
            24-26 October 2019 | ExCel London Convention Center | London,
            England
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
        <section className='save-the-date-container'>
        <img className="save-date-img" src='../images/savethedate.jpg' alt='save the date'/>
        <div className="save-date-text-container">
        <div className="save-date">SAVE THE DATE </div><div> Registration for RootsTech 2019 opens September20!</div>
        <h2>Registration for RootsTech 2019 opens September20!</h2>
        <p>
        Registration for RootsTech 2019, happening February 27–March 2, 2019, opens on Thursday, September 20, 2018! For a limited time, exclusive early bird pricing will be available on RootsTech passes. Mark your calendars, and be one of the first to register for the world’s largest family history event!
        </p>
        </div>
        </section>
      </div>
    );
  }
}
