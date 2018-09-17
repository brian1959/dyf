import React, { Component } from "react";


export default class About extends Component {


  render() {
    document.title='About RootsTech';
    return (
      <div className="about-main">
        <section className="about-header">
          <div className="about-hero">
            <div className="about-image-wrapper">
              <img className='about-image'
                src="../images/about/about.jpg"
                alt="about"
              
              />
            </div>
            <div className="about-text-container">
              <div className="about-sub-title">CELEBRATING FAMILIES</div>
              <h1>What Is RootsTech?</h1>
              <p>
              At RootsTech, we believe in the power of family—and discovering your family story has never been easier! RootsTech is a 4-day event held annually in Salt Lake City, Utah, dedicated to celebrating family and discovering family histories. With over 300 breakout expects, an exciting lineup of celebrity speakers, and a gigantic expo hall, we’ve got something we’re sure you’ll love.
              </p>
            </div>
          </div>
        </section>
        <section className="about-expect">
          <div className="about-expect-header-box">
                <img className="about-expect-image"         src="../images/about/roots2017tree.jpg" alt="Classes"
                />
            </div>
          <div className="about-expect-main">What to Expect at RootsTech</div>
          <div className="about-expect-main-text">One of the most important things we’ve learned is that celebrating families knows no limitations. From the newest newbie to the most advanced family historian, there’s a place at RootsTech for everyone who’s interested in discovering their roots.</div>
          <div className="about-expo-features-wrapper">
            <div className="about-expo-feature-box">
              <a href="/#/courses">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/breakouts.jpg"
                  alt="Discovery"
                />
              </a>
              <a href="/#/courses">
                <h1>300+ Breakout Sessions</h1>
                <p>
                At RootsTech, learning is priority number one. Choose from over 300 classes taught by industry experts, professional genealogists, and experienced storytellers. Learn about the tools, resources, and methods available to uncover and share your family’s story.
                </p>
              </a>
            </div>
            <div className="about-expo-feature-box">
              <a href="/#/expohall">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/expohall.jpg"
                  alt="Expo Hall"
                />
              </a>
              <a href="/#/expohall">
                <h1>Expo Hall</h1>
                <p>
                The Expo Hall features more than 200 companies offering products and services designed to help you discover and connect with family. Enjoy demonstrations, free swag, and the opportunity to test out the latest family history tech!
                </p>
              </a>
            </div>
            <div className="about-expo-feature-box">
              <a href="/#/presenters">
                <img
                  className="about-expo-feature-image about-expect-image"
                  src="../images/about/Keynote.jpg"
                  alt="Presenters"
                />
              </a>

              <a href="/#/presenters">
                <h1>Inspirational Keynote Sessions</h1>
                <p>
                Be inspired and uplifted by an all-star lineup of keynote speakers. Past RootsTech keynote speakers include: LeVar Burton, The Property Brothers, Scott Hamilton, and Buddy “Cake Boss” Valastro.
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="about-experience">
        <div className="about-exper-title">
        The RootsTech Experience</div>
        <div className="about-exper-wrapper">
        <div className="about-exper-box">
        <img className='about-exper-image' src='../images/about/pastconf.jpg' alt='Past Conferences'/>
        <h2>Watch Past Conferences</h2>
        <p>
        Watch recorded sessions from past conferences, and see why RootsTech </p>
        </div>
        <div className="about-exper-box">
        <img className='about-exper-image' src='../images/about/blog.jpg' alt='Blog'/>
        <h2>Read the RootsTech Blog</h2>
        <p>
        RootsTech is more than just a conference—it’s a hub for all things family history. Get the latest genealogy updates, tips, and tools year round. Subscribe to our newsletter at the bottom of the page.</p>
        </div>
        </div>
        </section>
        <section className='about-exper-quote-wrapper'>
        <div className='seperator-div'></div>
        <div className="about-exper-quote">
        “There are many great genealogical events all around the world, but RootsTech stands head and shoulders above them all. Nowhere else on earth can you meet so many like-minded individuals, new friends and even previously unknown relatives. The opportunities to learn, share, collaborate, and discover are endless.”</div>
        <div className="quote-person">
        —MYKO CLELLAND, FINDMYPAST
</div>
        <div className='seperator-div'></div>
        </section>
        <section className='video-clips'>
<div className="video-clips-title">Past Attendees Talk about Their RootsTech Experience</div>
<div className="video-clips-wrapper">
<a href='https://www.youtube.com/watch?v=nBno-JSC6W0&list=PLGng78LVGBHGOCL6LxB_KGj0Pb_UhjBNu&index=10'>

<div className="video-clip-box">
<img className='video-clip-image' src='../images/about/Curt-Witcher.jpg' alt='Curt Witcher'/><i className='fab fa-youtube fa-3x'></i>
<h2>Curt Witcher</h2></div></a>
<a href='https://www.youtube.com/watch?v=poFVQieNhFw&list=PLGng78LVGBHGOCL6LxB_KGj0Pb_UhjBNu&index=13'>
<div className="video-clip-box">
<img className='video-clip-image' src='../images/about/Sunny-Morton.jpg' alt='Sunny Morton'/><i className='fab fa-youtube fa-3x'></i>
<h2>Sunny Morton</h2></div></a>
<a href="https://www.youtube.com/watch?v=EQZ03jCo2f0&list=PLGng78LVGBHHr7LuHa5Rx8icHlgacZTZE&index=9">
<div className="video-clip-box">
<img className='video-clip-image' src='../images/about/NickaSmith.jpg' alt='Nicka Smith'/><i className='fab fa-youtube fa-3x'></i>
<h2>Nicka Smith</h2></div></a>
</div>
        </section>
 
      </div>
    );
  }
}
