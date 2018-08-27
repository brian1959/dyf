import React, { Component } from "react";

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduleToDisplay: {},
      dateFilter: ""
    };
  }

  render() {
    return (
      <div className="sch-container">
        <div className="sch-title">
          <h1>Discover Your Family 2018 Schedule</h1>
        </div>
        <div className="sch-day-box">
          <div className="day-selected">Thursday</div>
          <div className="day-selected">Friday</div>
          <div className="day-selected">Saturday</div>
        </div>
      </div>
    );
  }
}

export default Schedule;
