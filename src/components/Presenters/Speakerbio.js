import React from "react";

export default function Speakerbio(props){
    const {speakingDate,
      speakerName,
      speakerBio,
      presenterName,
      presenterTitle,
        presenterBio,
      getBioModal} =props.selectedSpeaker


  return (
    <div className="bio-background-container">
      <div className="bio-info-container">
        <div className="bio-header">
          <div className="bio-close-btn" onClick={() => getBioModal()}>
            <div className="bio-x">X</div>
          </div>
          <div className="bio-name">
            <h2>
             { speakingDate? `${speakingDate}-${speakerName}`:''}
              {presenterName}
            </h2>
            <h3>{presenterTitle}</h3>
          </div>
        </div>
        <div className="bio-info">
          <span>
            {speakerBio ? speakerBio : presenterBio}
          </span>
        </div>
      </div>
    </div>
  );
}
