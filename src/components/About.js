import React from 'react'


function About(props) {

  return (
    <section id="about">
      <div id="about-box">
        <div id="top-bar">
          <div className="circle" id="close-btn"></div>
          <div className="circle" id="min-btn"></div>
          <div className="circle" id="open-btn"></div>
          <p>About</p>
        </div>
        <div id="content">
          <img src={props.requestImageFiles("./me.jpg").default} alt=""/>
          <div className="about-content">
            <p id="job-title">Full Stack Engineer</p>
            <h1 id="name">Hello, I'm Zion!</h1>
            <p id="description">Ruby on Rails, ReactJS are my specialities! In my freetime I make art, hike, or rock climb!</p>
            <p id="cta">Contact me to collaborate!</p>
            <div id="link-bar">
              <i className="fab fa-github-square github-icon"></i>
              <i className="fab fa-linkedin linkedin-icon"></i>
              <i className="fas fa-envelope-square email-icon"></i>
              <button id="resume-button">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
