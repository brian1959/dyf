import React from "react";

export default function Speakerbio({speakingDate,speakerName,speakerBio,presenterName,presenterTitle,presenterBio}) {
  return (
    <div className="bio-info-container">
      <div className="bio-header">
        <div className="bio-name">
          <h2>
            {speakingDate}? {`${speakingDate}-${speakerName}`}
           : {presenterName}
          </h2>
          <h3>{presenterTitle}</h3>
        </div>
      </div>
      <div className="bio-info">
        <span>
          {speakerBio}? {speakerBio} : {presenterBio}
        </span>
      </div>
    </div>
  );
}
