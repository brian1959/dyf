import React, { Component } from "react";
import axios from "axios";
import Coursetime from "./Coursetime";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey:'All',
      courses: [],
      displaytime: [],
      displayday: "Thursday",
      scheduleid: "",
      coursename: "",
      coursesummary: "",
      presenter: "",
      company: "",
      day: "",
      time: "",
      explevel: ""
    };
  }
  componentDidMount() {
    axios.get("/api/schedule").then(response => {
      this.setState({ courses: response.data });
    });

    axios.get("/api/times").then(response => {
      this.setState({ displaytime: response.data });
    });
  }

  handleDayChange(currentday) {
    this.setState({ displayday: currentday });
  }

  render() {
    let coursesToDisplay = this.state.courses.filter(
      course => course.day === this.state.displayday
    );

    let timeToDisplay = this.state.displaytime.filter(
      times => times.day === this.state.displayday
    );
    console.log(coursesToDisplay);

    return (
      <div className="courses-main-wrapper">
        <section className="course-section">
          <div className="courses-header">
            <span>RootsTech 2018 Schedule</span>
          </div>
          <div className="sub-change">Subject to change</div>
          <div className="day-box-container">
            <div
              className="day-box dayT "
              style={
                this.state.displayday === "Thursday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Thursday")}
            >
              <div className="day-letter-holder dayT">TH</div>
              <div className="day-name-holder dayth">Thursday</div>
            </div>
            <div
              className="day-box dayF"
              style={
                this.state.displayday === "Friday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Friday")}
            >
              <div className="day-letter-holder dayF">F</div>
              <div className="day-name-holder dayfr">Friday</div>
            </div>
            <div
              className="day-box dayS"
              style={
                this.state.displayday === "Saturday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Saturday")}
            >
              <div className="day-letter-holder dayS">S</div>
              <div className="day-name-holder daysa">Saturday</div>
            </div>
          </div>
        </section>

        <div className="filterable-schedule-container">
          <div className="schedule-container">
            <div className="schedule-filters-container">
              <div className="schedule-filter">
                <span className="sf-header">PASS</span>
                <div className="dot-symbol-holder " />
                <div className="all-key">All</div>
                <div className="arrow-up">X</div>
                <div className="hidden-selector">
                  <div className="selector-holder">
                    <div className="circle-selector dot-symbol grey" />
                    <div className="selector-name">All</div>
                  </div>
                  <div className="selector-holder">
                    <div className="circle-selector dot-symbol blue" />
                    <div className="selector-name">Family Discovery Day</div>
                  </div>
                  <div className="selector-holder">
                    <div className="circle-selector dot-symbol green" />
                    <div className="selector-name">Getting Started</div>
                  </div>
                  <div className="selector-holder">
                    <div className="circle-selector dot-symbol magenta" />
                    <div className="selector-name">RootsTech</div>
                  </div>
                  <div className="selector-holder">
                    <div className="circle-selector dot-symbol blended" />
                    <div className="selector-name">
                      RootsTech Pass Paid Add-ons
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">DIFFICULTY</span>
                <div className="all-key">All</div>
                <div className="arrow-up">X</div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">CATEGORY</span>
                <div className="all-key">All</div>
                <div className="arrow-up">X</div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">SEARCH</span>
                <div className="all-key">All</div>
                <div className="arrow-up">X</div>
              </div>
            </div>
            <div className="course-schedule-container">
              {timeToDisplay.map(schtime => (
                <Coursetime
                  key={`${schtime.time}_${schtime.day}`}
                  time={schtime.time}
                  coursestime={coursesToDisplay.filter(course => {
                    return course.time === schtime.time;
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
