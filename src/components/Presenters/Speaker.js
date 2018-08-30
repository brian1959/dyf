import React from "react";

export default function Speaker(props) {
  return (
    <div
      className="speaker-info-container"
      onClick={() => props.getBioModal(props)}
    >
     
        <img className="speaker-image" src={`../images/${props.speakerImage}`} alt={props.speakerName} />
      
      <div className="speaker-info">
        <h2>{`${props.speakingDate}--${props.speakerName}`}</h2>

        <span>{props.speakerTitle}</span>
      </div>
    </div>
  );
}
