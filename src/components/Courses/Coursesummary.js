import React from "react";

export default function Coursesummary(props) {
  return (
    <div className="course_info_container">
      <div className="title frame">
        Course Name: <p>{props.cname}</p>
      </div>
      <div className="summary frame">
        Course Summary:
        <p>{props.csummary}</p>
      </div>
      <div className="instructor frame">
        Instructor <p>{`${props.pfirstname} ${props.plastname}`}</p>
      </div>
      <div className="level frame">
        Class Level <p>{props.elevel}</p>
      </div>
    </div>
  );
}
