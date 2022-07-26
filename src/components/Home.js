import React from 'react'
import './Home.css'
import BackgroundSlider from 'react-background-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'


function Home() {
  const images = [img1, img2, img3, img9, img4, img5, img8, img6, img7, img10 ]

  return (
    <div id="Home" className='homeContainer'>
        <div className="homeSection">
            <div className='homeWrapper'>
              <div className="homePaths">
                <a href="#About" className="homePathsText"><FontAwesomeIcon className="downIcon" icon={faAngleDown}/></a>
              </div> 
                <div className="homeTitle">FRANK LU</div>
            </div>
        </div>
        <div className="homeBody">
            <BackgroundSlider className="backgroundImages" images={images} duration={5} transition={1}/>
        </div>
    </div>
  )
}

export default Home