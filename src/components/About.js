import React from 'react'
import NavBar from './NavBar'
import aboutImg2 from '../images/aboutImg2_50.jpg'
import './About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTiktok, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';


function About() {
  return (
    <div className='aboutContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="aboutWrapper">
            <div className="aboutPadding"></div>
            <div className="aboutCard">
                <div className="aboutLeftSection">
                    <div className="aboutText">
                        <span>Hi, my name is Frank Lu (Flu Sketches).<br/><br/></span>
                        <span>I draw digitally on Procreate, Adobe photoshop, and Clip studio Paint. 
                            As an artist, I strive to be better and take others around me as role models. 
                            For me that would include social content creators and modern day artists like 
                            RossDraws, Guweiz, Wlop, SamdoesArts, and KushinovIlya. Looking at their work 
                            inspires me to do better and to be able to tell stories or messages in a single 
                            picture.</span>
                    </div>
                    <div className="socialMediaContainer">
                        <a href="https://twitter.com/NFT_Flu" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTwitter} style={{fontSize: '2vw'}}/></a>
                        <a href="https://www.instagram.com/flu_sketches/" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faInstagram} style={{fontSize: '2vw'}}/></a>
                        <a href="https://www.tiktok.com/@flu_sketches?lang=en" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTiktok} style={{fontSize: '2vw'}}/></a>
                    </div>
                </div>
                <div className="aboutRightSection">
                    <div className="rightSectionItems">
                        <LazyLoadImage effect="blur" className="aboutImgContainer" alt="" src={aboutImg2}/>
                    </div>
                </div>
            </div>
            <div className="aboutPadding"></div>
        </div>

    </div>
  )
}

export default About