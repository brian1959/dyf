import React, { Component } from "react";

class Events extends Component {
  render() {
    document.title = "Events";

    return (
      <div className="event-main">
        <span className="event-header">RootsTech Events</span>
        <section className="event-hero">
          <img
            className="event-image"
            src="../images/events/hero.jpg"
            alt="Events"
            height="420px"
          />
          <div className="event-text-container">
            <h1>Celebrate Family History Connections</h1>
            <p>
              Attending the exciting events scheduled throughout the RootsTech
              conference is a fun way to celebrate your own family history
              experiences and connect with friends and colleagues. Plan on
              enjoying live music, tasty food, beautiful cultural performances,
              and more.
            </p>
            <a href="/#/registration">
              <div className="register-link">
                <div className="reg-link-box">
                  <div className="reg-link-text">Register for RootsTech</div>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="events-list-section">
          <div className="event-wrapper">
            <div className="event-image-holder">
              <img
                className="event-image"
                src="../images/events/proquest.jpg"
                alt="ProQuest"
              />
            </div>
            <div className="event-text-holder">
              <div className="event-date">
                WEDNESDAY, FEB. 28, 9:30 A.M. TO 12:30 P.M.
              </div>
              <div className="event-title">Access and Preservation Track</div>
              <div className="event-body">
                <p>
                  Interested in learning more about Digital Access and Digital
                  Preservation? Come see what industry experts are saying at the
                  Access and Preservation Day, sponsored by ProQuest and
                  FamilySearch.
                </p>
                <br />
                <p>
                  {" "}
                  Welcome by David Rencher, CGO at FamilySearch International,
                  and keynote by Brewster Kahle, Founder & Digital Librarian,
                  Internet Archive.{" "}
                </p>
                <br />
                <p>
                  Digital Preservation Presenters: Laura Stone—Arizona State
                  Library, Ken Williams—Utah State Archives, and Wendy
                  Hanamura—Internet Archives{" "}
                </p>
                <br />
                <p>
                  Record Access Presenters: Hollis Gentry—Smithsonian, Curt
                  Witcher—Allen Public Library, and Stephen
                  Valentine—FamilySearch
                </p>
              </div>
            </div>
          </div>
          <div className="event-wrapper">
            <div className="event-image-holder">
              <img
                className="event-image"
                src="../images/events/innovation.jpg"
                alt="Innovations"
              />
            </div>
            <div className="event-text-holder">
              <div className="event-date">
                WEDNESDAY, FEBRUARY 28, 4:30 P.M., MAIN STAGE
              </div>
              <div className="event-title">Innovation Showcase</div>
              <div className="event-body">
                Family history technology and innovation have come a long way,
                but you should see where they are going! Come listen to
                knowledgeable panelists discuss the past, present, and future of
                the industry at the 2018 Innovation Showcase.
              </div>
            </div>
          </div>
          <div className="event-wrapper">
            <div className="event-image-holder">
              <img
                className="event-image"
                src="../images/events/previewnight.jpg"
                alt="Preview Night"
              />
            </div>
            <div className="event-text-holder">
              <div className="event-date">
                WEDNESDAY, FEBRUARY 28, 6:00–8:00 P.M., EXPO HALL
              </div>
              <div className="event-title">Expo Hall Preview Night</div>
              <div className="event-body">
                Want to get hands-on experience with the latest and greatest
                innovations in the industry? Visit the gigantic RootsTech Expo
                Hall for a sneak peak. Now open on Wednesday evening from 6:00
                to 8:00 p.m.
              </div>
            </div>
          </div>
          <div className="event-wrapper">
            <div className="event-image-holder">
              <img
                className="event-image"
                src="../images/events/opening.jpg"
                alt="Opening Night"
              />
            </div>
            <div className="event-text-holder">
              <div className="event-date">
                THURSDAY, MARCH 1, 6:00 P.M., MAIN STAGE
              </div>
              <div className="event-title">
                RootsTech Opening Event: Celebrating the Greatest Generation
              </div>
              <div className="event-body">
                Join us for a humdinger of a good time at the RootsTech 2018
                opening event! This event will feature vignettes of 1940s era
                dance, music, and narration to celebrate the greatest
                generation. Enjoy entertainment from the internationally
                recognized BYU Ballroom Dance Company and Synthesis, an
                award-winning swing, blues, and jazz musical group, also hailing
                from Brigham Young University. The event will be narrated by the
                Emmy award-winning Bruce Lindsay.
              </div>
            </div>
          </div>
          <div className="event-wrapper">
            <div className="event-image-holder">
              <img
                className="event-image"
                src="../images/events/closing.jpg"
                alt="Closing Night"
              />
            </div>
            <div className="event-text-holder">
              <div className="event-date">
                SATURDAY, MARCH 3, 6:00 P.M., LDS CONFERENCE CENTER ON TEMPLE
                SQUARE
              </div>
              <div className="event-title">
                Closing Event: My Family. Mi Herencia. Featuring Luz de Las
                Naciones.
              </div>
              <div className="event-body">
                Wrap up your conference experience with the closing event "My
                Family, Mi Herencia"; a Luz de Las Naciones production that
                celebrates cultures and stories from Latin America! This event
                features over 1,000 people in the cast, including a youth and
                young adult choir, musicians, storytellers, and dance groups.
                They will be performing a variety of contemporary and
                traditional dances and songs from a number of different regions
                of Latin America. The event will be multilingual and easily
                understood and enjoyed regardless of language.
              </div>
            </div>
          </div>
        </section>
        <section className="event-register">
          <div className="event-new-bg">
            <h1>Register Today</h1>
            <a href="/#/registration">
              <div className="event-reg-link-box">
                <div className="event- reg-link-text">Register Today</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Events;
