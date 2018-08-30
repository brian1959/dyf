import React from "react";
import Collapsible from "react-collapsible";

export default function Schedule(props) {
  return (
    <div className="sch-container">
      <Collapsible trigger={props.coursename} transitionTime='2000'>

        <div className="session-speaker">{` ${props.presenter}, ${
          props.company
        }`}</div>
        <div className="session-summary"> {props.coursesummary}</div>
        <div className="session-meta-item">
          <span className="session-meta-item-label">Difficulty:</span>{" "}
          {props.explevel}
        </div>
        <div className="session-meta-item">
          <span className="session-meta-item-label">Category:</span>{" "}
          {props.category}
        </div>
      </Collapsible>
      <hr />
    </div>
  );
}
