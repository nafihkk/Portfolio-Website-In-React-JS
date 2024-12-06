import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profss.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate MERN stack developer with a strong foundation in modern web development. I recently completed comprehensive training in the MERN stack, which allowed me to deepen my expertise in building dynamic, responsive, and scalable web applications.</p>
                    <p>My passion for MERN stack development is rooted in the art of bringing ideas to life through code, With MongoDB, Express, React, and Node.js as my tools</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Bootstrap</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>JavaScript </p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2</h1>
                <p>MONTHS OF INTERNSHIP EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
           
       
        </div>
    </div>
  )
}

export default About