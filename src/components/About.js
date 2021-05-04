import React from 'react'


function About() {

  // Import images for use 
  let requestImageFiles = require.context('../assets',true,/.jpg$|.gif$/) 

  return (
    <section id="about">
      <div id="about-box">
        <img src={requestImageFiles("./me.jpg").default} alt=""/>
        <div className="about-content">
          <p className="subtitle-grey">Full Stack Engineer</p>
          <h1>Hello, I'm Zion!</h1>
          <p className="text light-grey">Ruby on Rails, ReactJS are my specialities! In my freetime I make art, hike, or rock climb!</p>
          <p className="text" id="cta">Contact me to collaborate!</p>
          <div className="link-bar">
            <i class="fab fa-github-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fas fa-envelope-square"></i>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
