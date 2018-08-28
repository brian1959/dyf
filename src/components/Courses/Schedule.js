import React, { Component } from "react";

export default function Schedule(props) {

    return (
      <div className="sch-container">
     <div className='session-title' > {props.coursename}</div>
     <div className='session-speaker' >{` ${props.presenter}, ${props.company}`}</div>
     <div className='session-summary' > {props.coursesummary}</div>
     <div className='session-meta-item' ><span className='session-meta-item-label'>Difficulty:</span> {props.explevel}</div>
     <div className='session-meta-item' ><span className='session-meta-item-label'>Category:</span> {props.category}</div>
     <hr />
           </div>
    );
  }



