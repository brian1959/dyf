import React, { Component } from "react";
import axios from "axios";
import Schedule from "./Schedule";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coursesToDisplayThursday: [],
      coursesToDisplayFriday: [],
      coursesToDisplaySaturday: [],
      coursesToDisplay: [],
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
      const Thursday = response.data.filter(
        course => course.day === "Thursday"
      );
      const Friday = response.data.filter(course => course.day === "Friday");
      const Saturday = response.data.filter(
        course => course.day === "Saturday"
      );

      this.setState({ coursesToDisplay: response.data });
    });
  }



  render() {
    const { coursesToDisplay } = this.state;
    console.log(coursesToDisplay)
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
        {coursesToDisplay.map(course => (
          <Schedule
            key={course.scheduleid}
            coursename={course.coursename}
            coursesummary={course.coursesummary}
            presenter={course.presenter}
            company={course.company}
            day={course.day}
            time={course.time}
            explevel={course.explevel}
          />
        ))}
      </div>
    );
  }
}

export default Courses;
