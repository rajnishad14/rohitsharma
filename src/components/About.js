import React from 'react'
import profile from '../resources/profile.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-head">
        <img src={profile} alt="profile" />
        <section className="info">
          <h1>Rohit Sharma</h1>
          <p className="nickname">hitman</p>
          <p className="tags">
            Indian Cricketer, Fitness Vlogger, Business Man
          </p>
        </section>
      </div>
      <div className="btn">Send Private Message</div>
    </div>
  )
}

export default About
