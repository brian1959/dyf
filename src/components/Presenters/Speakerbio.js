import React from 'react';

export default function Speakerbio(props){
    return (
        <div className="bio-info-container">
          <div className="bio-name">
            <h2>{`${props.speakingDate}--${props.speakerName}`}</h2>
          </div>
          <div className="bio-info">
            
            <span>{props.speakerBio}</span>
          </div>
        </div>
      );
}