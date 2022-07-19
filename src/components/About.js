import React from 'react'
import NavBar from './NavBar'
import aboutImg from '../images/aboutImg.png'
import './About.css'

function About() {
  return (
    <div className='aboutContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="aboutWrapper">
            <div className="aboutLeftSection">
                <div>Hi, my name is Frank.</div>
                <div>I have a passion for drawing.</div>
            </div>
            <div className="aboutRightSection">
                <img className="aboutImgContainer" src={aboutImg}></img>
            </div>
        </div>

    </div>
  )
}

export default About