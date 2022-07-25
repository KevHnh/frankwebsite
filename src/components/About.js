import React from 'react'
import NavBar from './NavBar'
import aboutImg2 from '../images/aboutImg2.jpg'
import './About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
  return (
    <div className='aboutContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="aboutWrapper">
            <div className="aboutLeftSection">
                <div className="aboutText">
                    <div>Hi, my name is Frank.</div>
                    <div>I have a passion for drawing.</div>
                </div>
            </div>
            <div className="aboutRightSection">
                <div className="rightSectionItems">
                    <LazyLoadImage effect="blur" className="aboutImgContainer" alt="" src={aboutImg2}/>
                    <div className="aboutImgDesc">Flu Sketches</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About