import React from "react";

export default function Featured(props) {
  return (
    <div className="featured-info-container">
      <div className="featured-image">
        <img
          src={`../images/${props.presenterImage}`}
          alt={props.presenterName} width='300px'
        />
      </div>
      <div className="featured-info">
        <h2>{props.presenterName}</h2>
        
        <span>{props.caption}</span>
      </div>
    </div>
  );
}
