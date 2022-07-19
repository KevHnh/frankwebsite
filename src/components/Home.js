import React from 'react'
import './Home.css'
import BackgroundSlider from 'react-background-slider'
import { useNavigate } from "react-router-dom";

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import img10 from '../images/img10.png'


function Home() {
  const images = [img1, img2, img3, img9, img4, img5, img8, img6, img7, img10 ]

  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
    window.location.reload(false);
  };

  return (
    <div className='aboutContainer'>
        <div className="aboutSection">
            <div className='aboutWrapper'>
                <div className="aboutTitle" onClick={() => redirectPage("/")}>FRANK LU</div> 
                <div className="aboutPaths" onClick={() => redirectPage("/About/")}>ABOUT</div> 
                <div className="aboutPaths" onClick={() => redirectPage("/Portfolio/")}>PORTFOLIO</div> 
                <div className="aboutPaths" onClick={() => redirectPage("/Shop/")}>EXPERIENCE</div> 
                <div className="aboutPaths" onClick={() => redirectPage("/About/")}>SHOP</div>
                <div className="aboutPaths" onClick={() => redirectPage("/Contact/")}>CONTACT</div> 
            </div>
        </div>
        <div className="aboutBody">
            <BackgroundSlider images={images} duration={10} transition={1}/>
        </div>
    </div>
  )
}

export default Home