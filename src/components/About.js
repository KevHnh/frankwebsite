import React from 'react'
import NavBar from './NavBar'
import aboutImg1 from '../images/aboutImg1.jpg'
import aboutImg2 from '../images/aboutImg2.jpg'
import './About.css'

function About() {
  return (
    <div className='aboutContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="aboutWrapper">
            <div className="aboutLeftSection">
                <div className="aboutText">
                    <div>Hi, my name is Frank. <br/><br/></div>
                    <div>I have a passion for drawing.</div>
                </div>
            </div>
            <div className="aboutRightSection">
                <img className="aboutImgContainer" alt="" src={aboutImg2}></img>
                <div className="aboutImgDesc">Flu Sketches</div>
            </div>
        </div>

    </div>
  )
}

export default About