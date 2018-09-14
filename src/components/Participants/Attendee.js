import React, { Component } from "react";
import axios from "axios";
import Myschedule from "./Myschedule";
import Schedulechoice from "./Schedulechoice";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendee: {},
      myschedule: [],
      selectedCourses: [],
      sday: "",
      stime: "",
      coursetitle: "",
      presenter: "",
      asid: ""
    };
    this.deleteClass = this.deleteClass.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
  }

  componentDidMount() {
    axios.get("/api/attendee").then(response => {
      this.setState({ attendee: response.data[0] });
    });

    axios.get("/api/attendeeschedule").then(schedule => {
      this.setState({ myschedule: schedule.data });
    });
  }

  deleteClass(asid) {
    console.log(asid);
    axios.delete(`/api/attendeeschedule/${asid}`).then(() => {
      axios.get("/api/attendeeschedule").then(schedule => {
        this.setState({ myschedule: schedule.data });
      });
    });
  }

  handleAddClass(scheduleid) {
    console.log(scheduleid);
    axios.post("/api/addschedule", { scheduleid }).then(response => {
      this.setState({ myschedule: response.data });
    });
  }

  handleInput(e) {
    const newInfo = { ...this.state.attendee, [e.target.name]: e.target.value };
    this.setState({ attendee: newInfo });
  }

  render() {
    const { myschedule } = this.state;

    const { attendee } = this.state;
    const {
      firstname,
      lastname,
      address,
      city,
      state,
      zip,
      phone,
      email
    } = attendee;

    return (
      <div className="attendee-wrapper">
        <div className="attendee-details-wrapper">
          <section className="profile-holder">
            <div className="profile-item-holder name">
              {`${firstname} ${lastname}`}
            </div>
            <div className="profile-item-holder ">
              <div className="profile-item-type">Address:</div>
              <div className="profile-item"> {address}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">City:</div>
              <div className="profile-item"> {city}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">State:</div>
              <div className="profile-item"> {state}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">Zip: </div>
              <div className="profile-item">{zip}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">Phone:</div>
              <div className="profile-item">{phone}</div>
            </div>
            <div className="profile-item-holder">
              <div className="profile-item-type">email:</div>
              <div className="profile-item"> {email}</div>
            </div>
          </section>
          <section className="my-schedule-selector">
            <div className="my-schedule-title">Current Schedule</div>
            <div className="my-schedule-column-headers">
              <div className="my-schedule-header header-day">Day</div>
              <div className="my-schedule-header header-time">Time</div>
              <div className="my-schedule-header header-class">Class Name</div>
              <div className="my-schedule-header header-presenter">
                Presenter
              </div>
              <div className="my-schedule-header" />
            </div>
            <div className="my-schedule-details-wrapper">
              {myschedule.map(eachcourse => (
                <Myschedule
                  key={eachcourse.asid}
                  asid={eachcourse.asid}
                  sday={eachcourse.day}
                  stime={eachcourse.time}
                  coursetitle={eachcourse.coursename}
                  presenter={eachcourse.presenter}
                  deleteClass={this.deleteClass}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="schedule-selection">
          <Schedulechoice handleAddClass={this.handleAddClass} />
        </section>
      </div>
    );
  }
}

export default Profile;
