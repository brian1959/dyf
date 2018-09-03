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
      </div>
    );
  }
}
