import React from 'react'
import NavBar from './NavBar'
import './Contact.css'
import aboutImg1 from '../images/aboutImg1.jpg'
import './About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTiktok, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="Contact" className='contactContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="contactWrapper">
            <div className="contactPadding"></div>
            <div className="contactCard">
                <div className="contactLeftSection">
                    <div className="contactText">
                        <span>Enjoyed my work? Want to work together? Have or want some advice?<br/><br/></span>
                        <span>Feel free to reach out to me with anything to say. I constantly want to grow as an artist, so your
                          advice will be extremely valuable to me. I also want to help aspiring artists as well, so don't be afraid to
                          ask questions as well. <br/><br/>
                        </span>
                    </div>
                    <div className="socialMediaContainer">
                        <a href="https://twitter.com/NFT_Flu" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTwitter} style={{fontSize: '2vw'}}/></a>
                        <a href="https://www.instagram.com/flu_sketches/" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faInstagram} style={{fontSize: '2vw'}}/></a>
                        <a href="https://www.tiktok.com/@flu_sketches?lang=en" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTiktok} style={{fontSize: '2vw'}}/></a>
                    </div>
                </div>
                <div className="contactRightSection">
                    <div className="contactSectionItems">
                        <LazyLoadImage effect="blur" className="aboutImgContainer" alt="" src={aboutImg1}/>
                    </div>
                </div>
            </div>
            <div className="contactPadding"></div>
        </div>
    </div>
  )
}

export default Contact