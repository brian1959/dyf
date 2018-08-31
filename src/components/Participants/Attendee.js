import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendee: [],
      selectedcourse: ""
    };
  }

  componentDidMount() {
    axios.get("/api/attendee").then(response => {
      this.setState({ attendee: response.data });
    });
  }

  render() {
    console.log(this.state.attendee);
    const { firstname } = this.state.attendee;
    return (
      <div>
        <section className="profile-holder">
          <div className="name-holder">{firstname}</div>
          <div className="address-holder">6968 W Flaming Sky Ct</div>
        </section>
        <section className="schedule-selector" />
      </div>
    );
  }
}

export default Profile;
