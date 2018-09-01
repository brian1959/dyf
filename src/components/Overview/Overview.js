import React from "react";

export default function Overview(props) {
  return (
    <section className="overview-hero">
      <div className="overview-image">
        <img src="../images/overview/hero.jpg" alt="Overview" height="420px" />
      </div>
      <div className="overview-text-container">
        <div className="overview-date">FEBRUARY 28–MARCH 3</div>
        <h1>Look at All of the Great Reasons to Attend</h1>
        <p>
          From our entertaining lineup of speakers, to our 200+ breakout
          sessions, to the giant expo hall, we’ve got something we’re sure
          you’ll love.
        </p>
      </div>
    </section>
  );
}
