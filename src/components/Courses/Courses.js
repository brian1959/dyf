import React, { Component } from "react";
import axios from "axios";
import Coursetime from "./Coursetime";
import { Checkbox } from "semantic-ui-react";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: "All",
      courses: [],
      displaytime: [],
      displayday: "Thursday",
      displaypasstype: "All",
      displaypasscolor: "alldot.gif",
      displayexplevel: ["All"],
      displaycategory: ["All"],
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

  componentDidUpdate(){

  }

  handleDayChange(currentday) {
    this.setState({ displayday: currentday });
  }

  handlePassType(passtype, passcolor) {
    this.setState({ displaypasstype: passtype, displaypasscolor: passcolor });
  }

  handleExpLevel(explvl) {
    this.setState({ displayexplevel: [...explvl] });
  }

  handleCategory(cat) {
    this.setState({ displaycategory: [...this.state.displaycategory,cat] });
  }

  render() {
    let coursesToDisplay = this.state.courses.filter(
      course => course.day === this.state.displayday
    );

    let timeToDisplay = this.state.displaytime.filter(
      times => times.day === this.state.displayday
    );
    console.log(coursesToDisplay);
    console.log(this.state.displaypasstype, this.state.displaypasscolor);

    return (
      <div className="courses-main-wrapper">
        <section className="course-section">
          <div className="courses-header">
            <span>RootsTech 2018 Schedule</span>
          </div>
          <div className="sub-change">Subject to change</div>
          <div className="general-day-box-container">
            <div
              className="day-box"
              style={
                this.state.displayday === "Wednesday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Wednesday")}
            >
              <div className="day-letter-holder dayW">W</div>
              <div className="day-name-holder daywe">WEDNESDAY</div>
            </div>

            <div
              className="day-box"
              style={
                this.state.displayday === "Thursday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Thursday")}
            >
              <div className="day-letter-holder dayT">Th</div>
              <div className="day-name-holder dayth">THURSDAY</div>
            </div>

            <div
              className="day-box"
              style={
                this.state.displayday === "Friday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Friday")}
            >
              <div className="day-letter-holder dayF">F</div>
              <div className="day-name-holder dayfr">FRIDAY</div>
            </div>

            <div
              className="day-box"
              style={
                this.state.displayday === "Saturday"
                  ? { background: "rgba(238, 238, 238)" }
                  : {}
              }
              onClick={() => this.handleDayChange("Saturday")}
            >
              <div className="day-letter-holder dayS">S</div>
              <div className="day-name-holder daysa">SATURDAY</div>
            </div>
          </div>
        </section>

        <div className="filterable-schedule-container">
          <div className="schedule-container">
            <div className="schedule-filters-container">
              <div className="schedule-filter">
                <span className="sf-header">PASS</span>
                <div className="dot-symbol-holder">
                  <img src={`../images/${this.state.displaypasscolor} `} />
                </div>
                <div className="all-key">{this.state.displaypasstype}</div>
                <div className="arrow-up">
                  <div className="arrow-line"></div>
                  <div className="arrow-line"></div>
                  </div>
                <div className="hidden-selector">
                  <div
                    className="selector-holder"
                    onClick={() => this.handlePassType("All", "alldot.gif")}
                    style={
                      this.state.displaypasstype === "All"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                  >
                    <img
                      className="filter-passdot"
                      src="../images/alldot.gif"
                    />
                    <div className="selector-name">All</div>
                  </div>
                  <div
                    className="selector-holder"
                    onClick={() =>
                      this.handlePassType("Family", "familydot.gif")
                    }
                    style={
                      this.state.displaypasstype === "Family"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                  >
                    <img
                      className="filter-passdot"
                      src="../images/familydot.gif"
                    />
                    <div className="selector-name">Family Discovery Day</div>
                  </div>
                  <div
                    className="selector-holder"
                    onClick={() =>
                      this.handlePassType("Getting Started", "startdot.gif")
                    }
                    style={
                      this.state.displaypasstype === "Getting Started"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                  >
                    <img
                      className="filter-passdot"
                      src="../images/startdot.gif"
                    />
                    <div className="selector-name">Getting Started</div>
                  </div>
                  <div
                    className="selector-holder"
                    onClick={() =>
                      this.handlePassType("RootsTech", "rootstechdot.gif")
                    }
                    style={
                      this.state.displaypasstype === "Rootstech"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                    style={
                      this.state.displaypasstype === "RootsTech"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                  >
                    <img
                      className="filter-passdot"
                      src="../images/rootstechdot.gif"
                    />
                    <div className="selector-name">RootsTech</div>
                  </div>
                  <div
                    className="selector-holder"
                    onClick={() =>
                      this.handlePassType("Add-ons", "addondot.gif")
                    }
                    style={
                      this.state.displaypasstype === "Add-ons"
                        ? { background: "rgba(238, 238, 238)" }
                        : {}
                    }
                  >
                    <img
                      className="filter-passdot"
                      src="../images/addondot.gif"
                    />
                    <div className="selector-name">
                      RootsTech Pass Paid Add-ons
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">DIFFICULTY</span>
                <div className="all-key">{this.state.displayexplevel}</div>
                <div className="arrow-up">X</div>
                <div className="hidden-selector">
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleExpLevel("Beginner")} />
                    <div className="exp-lvl-title">Beginner</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleExpLevel("Intermediate")}
                    />
                    <div className="exp-lvl-title">Intermediate</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleExpLevel("Professional")}
                    />
                    <div className="exp-lvl-title">Professional</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleExpLevel("Advanced")} />
                    <div className="exp-lvl-title">Advanced</div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">CATEGORY</span>
                <div className="all-key">{this.state.displaycategory}</div>
                <div className="arrow-up">X</div>
                <div className="hidden-selector">
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("DNA")} />
                    <div className="exp-lvl-title">DNA</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("Photos")} />
                    <div className="exp-lvl-title">Photos</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Methodology")}
                    />
                    <div className="exp-lvl-title">Methodology</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Technology")}
                    />
                    <div className="exp-lvl-title">Technology</div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">SEARCH</span>
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
