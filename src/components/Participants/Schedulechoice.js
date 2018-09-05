import React, { Component } from "react";
import axios from "axios";
import Schedulechoicetime from "./Schedulechoicetime";

class Schedulechoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    return (
      <div className="my-schedule-main-wrapper">
        <section className="my-schedule-section">
          <div className="my-schedule-day-box-container">
            <div
              className="my-schedule-day-box dayT "
              style={
                this.state.displayday === "Thursday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Thursday")}
            >
              <div className="my-schedule-day-letter-holder dayT">TH</div>
              <div className="my-schedule-day-name-holder dayth">Thursday</div>
            </div>
            <div
              className="my-schedule-day-box dayF"
              style={
                this.state.displayday === "Friday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Friday")}
            >
              <div className="my-schedule-day-letter-holder dayF">F</div>
              <div className="my-schedule-day-name-holder dayfr">Friday</div>
            </div>
            <div
              className="my-schedule-day-box dayS"
              style={
                this.state.displayday === "Saturday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Saturday")}
            >
              <div className="my-schedule-day-letter-holder dayS">S</div>
              <div className="my-schedule-day-name-holder daysa">Saturday</div>
            </div>
          </div>
        </section>
        <div className="filterable-schedule-container" />
        <div className="schedule-container-scroll">
          <div className="course-schedule-container">
            {timeToDisplay.map(schtime => (
              <Schedulechoicetime
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
    );
  }
}

export default Schedulechoice;
