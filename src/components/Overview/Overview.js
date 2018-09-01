import React from "react";

export default function Overview(props) {
  return (
    <div className="overview-main">
      <section className="overview-header">
        <div className="overview-hero">
          <div className="overview-image">
            <img
              src="../images/overview/hero.jpg"
              alt="Overview"
              height="430px"
            />
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
        </div>
      </section>
      <section className="overview-sessions">
        <div className="overview-session-header-box">
          <img
            className="overview-session-image"
            src="../images/overview/ClassesCircle_ruby.jpg"
            alt="Classes"
          />
          <div className="overview-session-main">200+ Breakout Sessions</div>
          <div className="overview-session-main-text">
            Get ready to have the ultimate learning experience. With over 200
            breakout sessions for all levels of experience, the only challenge
            will be deciding which to attend.
          </div>
          .
        </div>
        <div className="overview-session-categories-box">
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_DNA_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">DNA</div>
              <div className="overview-session-category-text">
                Discover the thrilling possibilities sitting on the horizon of
                modern DNA testing—and what it could mean for you.
              </div>
            </div>
          </div>
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_tools_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">Tools</div>
              <div className="overview-session-category-text">
                You'll feel empowered when you realize how many helpful
                genealogical tools are at your disposal. Come learn how to use
                them.
              </div>
            </div>
          </div>
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_pictures_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">Photos</div>
              <div className="overview-session-category-text">
                Learn the best practices for protecting and preserving your
                priceless family photos.
              </div>
            </div>
          </div>
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_stories_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">Stories</div>
              <div className="overview-session-category-text">
                Modern technology has made collecting meaningful family stories
                for future generations a cinch—just wait till you see the
                options!
              </div>
            </div>
          </div>
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_organize_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">Organizing</div>
              <div className="overview-session-category-text">
                Overwhelmed by old documents, photos, and stories? Come learn
                some ingenious ways to organize them.
              </div>
            </div>
          </div>
          <div className="overview-session-category-wrapper">
            <div className="overview-session-category-image">
              <img
                className="overview-session-image os-image"
                src="../images/overview/classes_discovery_ruby.jpg"
              />
            </div>
            <div className="overview-session-category-text-wrapper">
              <div className="overview-session-category-title">Discovery</div>
              <div className="overview-session-category-text">
                Any of our discovery sessions will lead you to do just
                that—discover! Get ready to unlock the door to your family's
                past.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overview-expohall">
        <div className="ov-expo-title">Expo Hall</div>
        <div className="ov-expo-hero-wrapper">
          <img
            className="ov-expo-image ov-expo-hero"
            src="../images/overview/expohall.jpg"
            alt="expo Hall"
          />
          <div className="ov-expo-text-wrapper">
            <div className="ov-expo-text-title">An Attendee Favorite!</div>
            <div className="ov-expo-text">
              Get in on the action by visiting our giant, interactive expo hall.
              It's the perfect place to meet hundreds of vendors and find out
              what's up and coming in the family history industry.
            </div>
            <a href="/#/expohall">
              <div className="ov-expo-btn">
                <span className="ov-expo-link">Expo Hall</span>
              </div>
            </a>
          </div>
        </div>
        <div className="ov-expo-title">What to Do at the Expo Hall</div>
        <div className="ov-expo-features-wrapper">
          <div className="ov-expo-feature-box">
            <img
              className="ov-expo-feature-image overview-session-image"
              src="../images/overview/discovery.jpg"
              alt="Discovery"
            />
            <h1>Discovery Zone</h1>
            <p>
              At discovery zone,you'll see your ancestors come to life with
              interactive displays, fun facts, and engaging activies. Come see
              how fun it can be to learn about your heritage.
            </p>
          </div>
          <div className="ov-expo-feature-box">
            <div className="ov-expo-feature-image">
              <img
                className="ov-expo-feature-image overview-session-image"
                src="../images/overview/innovation.jpg"
                alt="Innovation"
              />
            </div>
            <h1>Innovation Alley</h1>
            <p>
              Check out a showcase of new tech tools and products at Innovation
              Alley. While you're there chat with developers and entrepreneurs
              who are making an impact in the industry.
            </p>
          </div>
          <div className="ov-expo-feature-box">
            <div className="ov-expo-feature-image">
              <img
                className="ov-expo-feature-image overview-session-image"
                src="../images/overview/coaches.jpg"
                alt="Coaches Corner"
              />
            </div>
            <h1>Coaches Corner</h1>
            <p>
              At discovery zone,you'll see your ancestors come to life with
              interactive displays, fun facts, and engaging activies. Come
              seehow fun it can be to learn about your heritage.
            </p>
          </div>
        </div>
      </section>
      <section className="ov-reasons">
        <div className="reason-title">
          4 Reasons You're Going to Love RootsTech 2019
        </div>
        <div className="ov-reasons-wrapper">
          <div className="ov-reasons-filter-container">
            <div className="ov-reason-filter-box">
              <div className="reason-num">1</div>
              <div className="reason-prop">AMAZING EVENTS</div>
            </div>
            <div className="ov-reason-filter-box">
              <div className="reason-num">2</div>
              <div className="reason-prop">INFORMATIVE SESSIONS</div>
            </div>
            <div className="ov-reason-filter-box">
              <div className="reason-num">3</div>
              <div className="reason-prop">EXPO HALL</div>
            </div>
            <div className="ov-reason-filter-box">
              <div className="reason-num">4</div>
              <div className="reason-prop">INSPIRING KEYNOTES</div>
            </div>
          </div>
          <div className="ov-reason-image-holder">
          <img className='ov-reason-image' src='../images/overview/amazeevent.jpg' alt='amazing events'/>
          </div>
        </div>
      </section>
    </div>
  );
}
