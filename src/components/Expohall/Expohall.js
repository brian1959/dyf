import React, { Component } from "react";

class Expohall extends Component {
  render() {
    return (
      <div className="expo-main">
        <span className="expo-header">RootsTech Expo Hall 2018</span>
        <section className="expo-hero">
          <img
            className="expo-image"
            src="../images/expohall.jpg"
            alt="Expo Hall" height='420px'
          />
          <div className="expo-text-container">
            <h1>Experience RootsTech’s Giant Expo Hall</h1>
            <p>
              The Expo Hall is the place to discover helpful solutions, watch
              demonstrations, and interact with innovative family history
              technology. Come and see what hundreds of exhibitors from around
              the globe have to share.
            </p>

          </div>
        </section>
        <section expo-new-schedule>
          <div className="reason-expo-new-bg">
            <h1>Expo Hall Hours</h1>
            <div className="expo-text">
              Thursday 9:30 a.m. to 7:00 p.m. | Friday 9:30 a.m. to 7:00 p.m. |
              Saturday 9:30 a.m. to 5:00 p.m.
            </div>
            <div className="expo-text-small">
              Test out the latest technology, interact with vendors, and get
              free swag!
            </div>
          </div>
        </section>
        <section className="five-reasons-section">
          <div className="five-reasons-header">
            5 Reasons to Visit the Expo Hall
          </div>
          <div className="reason-wrapper">
            <div className="reason-image-holder" >
            <img src='../images/expo/coaches.jpg' atl='coaches' width='260px' />
            </div>
            <div className="reason-text-holder" >
              <div className="five-reason-date">
                 FEBRUARY 28–MARCH 2, EXPO HALL
              </div>
              <div className="five-reason-title">
                Trace.com Coaches’ Corner
              </div>
              <div className="reason-body">
                  Back by popular demand, the Trace.com Coaches’ Corner in the
                  Expo Hall is the place to go if you’re looking for one-on-one
                  mentoring from an expert genealogist. Bring your biggest
                  roadblocks or dead ends, and receive personalized help.
              </div>
            </div>
          </div>
          <div className="reason-wrapper" >
            <div className="reason-image-holder" >
            <img className='expo-image' src='../images/expo/heirloom.jpg' alt='Heirloom' />
            </div>
            <div className="reason-text-holder" >
              <div className="five-reason-date">MARCH 1–3, EXPO HALL</div>
              <div className="five-reason-title">Heirloom Show and Tell</div>
              <div className="reason-body">
                  Have an antique, heirloom, or photo that you’d like an expert
                  to look at? Now’s your chance! Bring in any small item, or a
                  photo, or a large item you’ve been wondering about, and we’ll
                  tell you about it.
              </div>
            </div>
          </div>
          <div className="reason-wrapper" >
            <div className="reason-image-holder" >
            <img className='expo-image' src='../images/expo/innovation.jpg' atl='Innovation' />
            </div>
            <div className="reason-text-holder" >
              <div className="five-reason-date">
                  FEBRUARY 28–MARCH 3, EXPO HALL
              </div>
              <div className="five-reason-title">
                  Innovation Alley
              </div>
              <div className="reason-body">
                  Back by popular demand is the Innovation Alley found in the
                  Expo Hall. Innovation Alley features new tech in the family
                  history industry, or in adjacent markets. Schedule some time
                  to stop by these booths, and give exhibitors a warm welcome to
                  the industry.
              </div>
            </div>
          </div>
          <div className="reason-wrapper" >
            <div className="reason-image-holder" >
            <img className='expo-image'  src='../images/expo/discovery.jpg' alt='Discovery'/>
            </div>
            <div className="reason-text-holder" >
              <div className="five-reason-date">
                  FEBRUARY 28–MARCH 3, EXPO HALL
              </div>
              <div className="five-reason-title">
                  Discovery Zone
              </div>
              <div className="reason-body">
                  At the Discovery Zone, you’ll see your ancestors come to life
                  with interactive displays, fun facts, engaging activities, and
                  the all new indexing station. Come see how fun it can be to
                  learn about your heritage.
              </div>
            </div>
          </div>
                
          <div className="reason-wrapper" >
            <div className="reason-image-holder" >
            <img className='expo-image' src='../images/expo/23andme.jpg' atl='23 and Me' />
            </div>
            <div className="reason-text-holder" >
            <hr/>
              <div className="five-reason-date">
                  FEBRUARY 28–MARCH 3, EXPO HALL
              </div>
              <div className="five-reason-title">
                23andMe Demo Theater
              </div>
              <div className="reason-body">
                  After you’ve walked the Expo Hall, come rest your feet in the
                  demo theater. Watch exhibitors give informative, 15-minute
                  presentations and demonstrations while you relax on
                  comfortable couches. Also join us for the Lounge and Learn
                  presentations: DNA User Experience Stories on Thursday, How to
                  Tell a Story with Photography on Friday, and FamilySearch
                  Product Managers: The Nerd Herd on Saturday. Visit the
                  schedule page for more information on these events.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Expohall;
