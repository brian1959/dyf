import React, { Component } from "react";
import axios from "axios";
import Coursetime from "./Coursetime";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // coursesToDisplayThursday: [],
      // coursesToDisplayFriday: [],
      // coursesToDisplaySaturday: [],
      // timeToDisplay: [],
      courses: [],
      displaytime:[],
      displayday:'Thursday',
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

      this.setState({courses: response.data });
    });

    axios.get("/api/times").then(response => {
      this.setState({ displaytime: response.data });
    });
  }

  render() {
    let  coursesToDisplay = this.state.courses.filter(course => course.day === this.state.displayday);
    console.log(coursesToDisplay)
    let timeToDisplay = this.state.displaytime.filter(times => times.day === this.state.displayday);

    return (
      <div>
        <section className="course-section">
          <div className="courses-header">
            <span>RootsTech 2018 Schedule</span>
          </div>
          <div className="day-box-container">
            <div className="day-box dayT current-day">
              <div className="day-letter-holder dayT">TH</div>
              <div className="day-name-holder dayth">Thursday</div>
            </div>
            <div className="day-box dayF">
              <div className="day-letter-holder dayF">F</div>
              <div className="day-name-holder dayfr">Friday</div>
            </div>
            <div className="day-box dayS">
              <div className="day-letter-holder dayS">S</div>
              <div className="day-name-holder daysa">Saturday</div>
            </div>
          </div>
        </section>
        <div className="schedule-container">
          <div className="schedule-filters-container">
            <div className="schedule-filter">PASS</div>
            <div className="schedule-filter">DIFFICULTY</div>
            <div className="schedule-filter">CAETGORY</div>
            <div className="schedule-filter">SEARCH</div>
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
    );
  }
}

export default Courses;
