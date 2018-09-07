import React from "react";
import Schedule from './Schedule';

export default function Coursetime(props) {
  
  return (
    <div className="coursetime-container">
      <div className="time-container">
        <div className="time-block">
          {props.time}
        </div>
        <div className="session-type">
          <span>Session/Lab</span>
        </div>
      </div>
      {props.coursestime.map(course => {
        
        return (
        <Schedule
          key={course.scheduleid}
          coursename={course.coursename}
          coursesummary={course.coursesummary}
          presenter={course.presenter}
          company={course.company}
          day={course.day}
          time={course.time}
          explevel={course.explevel}
          category={course.category}
        />
      
        )}
      )}

    </div>
  );
}
