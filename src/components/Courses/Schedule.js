import React, { Component } from "react";
import Collapsible from "react-collapsible";

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scheduleid: ""
    };
  }

  render() {
   
    return (
      <div className="sch-container">
        <img
          className="passdot"
          src={
            this.props.passtype === "Family"
              ? "../images/familydot.gif"
              : this.props.passtype === "Getting Started"
                ? "../images/startdot.gif"
                : "../images/rootstechdot.gif"
          }
          alt="color dot"
        />
        <Collapsible trigger={this.props.coursename} transitionTime={300}>
          <div className="session-speaker">{` ${this.props.presenter}, ${
            this.props.company
          }`}</div>
          <div className="session-summary"> {this.props.coursesummary}</div>
          <div className="session-meta-item">
            <span className="session-meta-item-label">Difficulty:</span>{" "}
            {this.props.explevel}
          </div>
          <div className="session-meta-item">
            <span className="session-meta-item-label">Category:</span>{" "}
            {this.props.category}
          </div>
        </Collapsible>
        <hr />
      </div>
    );
  }
}
