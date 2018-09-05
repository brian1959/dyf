import React from "react";
import Scheduleadd from './Scheduleadd';

export default function Schedulechoicetime(props) {

  return (
    <div className="coursetime-container">
      <div className="my-time-container">
        <div className="my-time-block">
          {props.time}
        </div>
        <div className="my-session-type">
          <span>Session/Lab</span>
        </div>
      </div>
      {props.coursestime.map(course => {
        
        return (
        <Scheduleadd
          key={course.scheduleid}
          scheduleid={course.scheduleid}
          coursename={course.coursename}
          coursesummary={course.coursesummary}
          presenter={course.presenter}
          company={course.company}
          day={course.day}
          time={course.time}
          explevel={course.explevel}
          handleAddClass={props.handleAddClass}
        />
      
        )}
      )}

    </div>
  );
}
