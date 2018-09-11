import React, {Component} from "react";
import Collapsible from "react-collapsible";


export default class Scheduleadd extends Component {
  

  render(){


  return (
    <div className="sch-add-container">
<div className='add-class-item-container'>
<div className="add-btn-wrapper">
      <button className='add-class' onClick={() => this.props.handleAddClass( this.props.scheduleid)} >Add Class</button></div>
      <div className="add-collapsible-wrapper">
      <Collapsible trigger={this.props.coursename} transitionTime={300} className='sa-session-title'>
        <div className="sa-session-speaker">{` ${this.props.presenter}, ${
          this.props.company
        }`}</div>
        <div className="sa-session-summary"> {this.props.coursesummary}</div>
        <div className="sa-session-meta-item">
          <div className="sa-session-meta-item-label">Difficulty:</div>
          {this.props.explevel}
        </div>
        <div className="sa-session-meta-item">
          <div className="sa-session-meta-item-label">Category:</div>
          {this.props.category}
        </div>
      </Collapsible></div>
      </div>
      <hr />
    </div>
  )};
}
