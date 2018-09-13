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
      passMenuShow: false,
      categoryMenuShow: false,
      explMenuShow: false,
      scheduleid: "",
      coursename: "",
      coursesummary: "",
      presenter: "",
      company: "",
      day: "",
      time: "",
      explevel: "",
      expFilter: "",
      catFilter: ""
    };
  }
  componentDidMount() {
    document.title = "Schedule";

    axios.get("/api/schedule").then(response => {
      this.setState({ courses: response.data });
    });

    axios.get("/api/times").then(response => {
      this.setState({ displaytime: response.data });
    });
  }

  componentDidUpdate(prevState) {
    if (this.state !== prevState.state) {
    }
  }

  handleDayChange(currentday) {
    this.setState({ displayday: currentday });
  }

  handlePassType(passtype, passcolor) {
    this.setState({ displaypasstype: passtype, displaypasscolor: passcolor });
  }

  handleExpLevel(explvl) {
    if (this.state.displayexplevel[0] === "All") {
      this.setState({ displayexplevel: [explvl] });
    } else {
      if (
        this.state.displayexplevel[0] === explvl &&
        this.state.displayexplevel.length === 1
      ) {
        this.setState({ displayexplevel: ["All"] });
      } else {
        if (this.state.displayexplevel.indexOf(explvl) === -1) {
          this.setState({
            displayexplevel: [...this.state.displayexplevel, explvl]
          });
        } else {
          let modDisplayExplevel = this.state.displayexplevel.slice();
          modDisplayExplevel.splice(modDisplayExplevel.indexOf(explvl), 1);
          this.setState({ displayexplevel: modDisplayExplevel });
        }
      }
    }
  }

  handleCategory(cat) {
    if (this.state.displaycategory[0] === "All") {
      this.setState({ displaycategory: [cat] });
    } else {
      if (
        this.state.displaycategory[0] === cat &&
        this.state.displaycategory.length === 1
      ) {
        this.setState({ displaycategory: ["All"] });
      } else {
        if (this.state.displaycategory.indexOf(cat) === -1) {
          this.setState({
            displaycategory: [...this.state.displaycategory, cat]
          });
        } else {
          let modDisplayCategory = this.state.displaycategory.slice();
          modDisplayCategory.splice(modDisplayCategory.indexOf(cat), 1);
          this.setState({ displaycategory: modDisplayCategory });
        }
      }
    }
  }

  // function rebuild() {
  // this.setState({ displaycategory: [...this.state.displaycategory, cat] })

  showPassFilter() {
    let arrowBtn = document.querySelector(".arrow-up");
    this.setState({
      passMenuShow: !this.state.passMenuShow
    });
    if (!this.state.passMenuShow) {
      arrowBtn.classList.add("close");
    } else {
      arrowBtn.classList.remove("close");
    }
  }

  render() {
    console.log(this.state.displayexplevel);
    let passTypeToDisplay = [];
    if (this.state.displaypasstype !== "All") {
      passTypeToDisplay = this.state.courses.filter(
        course => course.passtype === this.state.displaypasstype
      );
    } else {
      passTypeToDisplay = this.state.courses;
    }
    console.log(this.state.displayexplevel[0]);

    let difficultyToDisplay = [];
    if (this.state.displayexplevel[0] !== "All") {
      this.state.displayexplevel.forEach(
        el => (el = this.state.displayexplevel + " || ")
      );
      difficultyToDisplay = passTypeToDisplay.filter(
        course => this.state.displayexplevel.indexOf(course.explevel) !== -1
      );
    } else {
      difficultyToDisplay = passTypeToDisplay;
    }
    console.log(difficultyToDisplay);

    let categoryToDisplay = [];
    if (this.state.displaycategory[0] !== "All") {
      categoryToDisplay = difficultyToDisplay.filter(
        course => this.state.displaycategory.indexOf(course.category) !== -1
      );
    } else {
      categoryToDisplay = difficultyToDisplay;
    }
    console.log(this.state.explevel);

    let coursesToDisplay = categoryToDisplay.filter(
      course => course.day === this.state.displayday
    );

    let timeToDisplay = this.state.displaytime.filter(
      times => times.day === this.state.displayday
    );

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
                  <img
                    src={`../images/${this.state.displaypasscolor} `}
                    alt="color dot"
                  />
                </div>
                <div className="all-key">{this.state.displaypasstype}</div>
                <div className="arrow-up" onClick={() => this.showPassFilter()}>
                  <div className="arrow-line" />
                  <div className="arrow-line" />
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
                      alt="color dot"
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
                      alt="blue dot"
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
                      alt="magenta dot"
                    />
                    <div className="selector-name">Getting Started</div>
                  </div>
                  <div
                    className="selector-holder"
                    onClick={() =>
                      this.handlePassType("RootsTech", "rootstechdot.gif")
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
                      alt="magenta dot"
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
                      alt="blended dot"
                    />
                    <div className="selector-name">
                      RootsTech Pass Paid Add-ons
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">DIFFICULTY</span>
                <div className="all-key">{[this.state.displayexplevel]}</div>
                <div className="arrow-up">
                  <div className="arrow-line" />
                  <div className="arrow-line" />
                </div>
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
                    <Checkbox onClick={() => this.handleExpLevel("advanced")} />
                    <div className="exp-lvl-title">Advanced</div>
                  </div>
                </div>
              </div>
              <div className="schedule-filter">
                <span className="sf-header">CATEGORY</span>
                <div className="all-key">{this.state.displaycategory}</div>
                <div className="arrow-up">
                  <div className="arrow-line" />
                  <div className="arrow-line" />
                </div>
                <div className="hidden-selector">
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Collaboration")}
                    />
                    <div className="exp-lvl-title">Collaboration</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("DNA")} />
                    <div className="exp-lvl-title">DNA</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Family Trees")}
                    />
                    <div className="exp-lvl-title">Family Trees</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Geographical")}
                    />
                    <div className="exp-lvl-title">Geographical</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Methodology")}
                    />
                    <div className="exp-lvl-title">Methodology</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("Military")} />
                    <div className="exp-lvl-title">Military</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("Mobile")} />
                    <div className="exp-lvl-title">Mobile</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Newspapers")}
                    />
                    <div className="exp-lvl-title">Newspapers</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Organization")}
                    />
                    <div className="exp-lvl-title">Organization</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Photo & Stories")}
                    />
                    <div className="exp-lvl-title">Photos & Stories</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Preservation")}
                    />
                    <div className="exp-lvl-title">Preservation</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("Records")} />
                    <div className="exp-lvl-title">Records</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox onClick={() => this.handleCategory("Religion")} />
                    <div className="exp-lvl-title">Religion</div>
                  </div>
                  <div className="exp-level">
                    <Checkbox
                      onClick={() => this.handleCategory("Social Media")}
                    />
                    <div className="exp-lvl-title">Social Media</div>
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
                <div className="arrow-up">
                  <div className="arrow-line" />
                  <div className="arrow-line" />
                </div>
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
