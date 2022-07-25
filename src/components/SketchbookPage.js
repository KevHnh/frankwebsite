import React from 'react'
import NavBar from './NavBar'
import './SketchbookPage.css'
import WSPGallery from './WSPGallery'
import { useNavigate } from "react-router-dom";

import sketchImg1 from '../sketchesImages/sketchImg1.jpg'
import sketchImg2 from '../sketchesImages/sketchImg2.jpg'
import sketchImg3 from '../sketchesImages/sketchImg3.jpg'
import sketchImg4 from '../sketchesImages/sketchImg4.jpg'
import sketchImg5 from '../sketchesImages/sketchImg5.jpg'
import sketchImg6 from '../sketchesImages/sketchImg6.jpg'
import sketchImg7 from '../sketchesImages/sketchImg7.jpg'
import sketchImg8 from '../sketchesImages/sketchImg8.jpg'
import sketchImg9 from '../sketchesImages/sketchImg9.jpg'
import sketchImg10 from '../sketchesImages/sketchImg10.jpg'
import sketchImg11 from '../sketchesImages/sketchImg11.jpg'
import sketchImg12 from '../sketchesImages/sketchImg12.jpg'
import sketchImg13 from '../sketchesImages/sketchImg13.jpg'
import sketchImg14 from '../sketchesImages/sketchImg14.jpg'
import sketchImg15 from '../sketchesImages/sketchImg15.jpg'
import sketchImg16 from '../sketchesImages/sketchImg16.jpg'
import sketchImg17 from '../sketchesImages/sketchImg17.jpg'
import sketchImg18 from '../sketchesImages/sketchImg18.jpg'
import sketchImg19 from '../sketchesImages/sketchImg19.jpg'
import sketchImg20 from '../sketchesImages/sketchImg20.jpg'
import sketchImg21 from '../sketchesImages/sketchImg21.jpg'
import sketchImg22 from '../sketchesImages/sketchImg22.jpg'
import sketchImg23 from '../sketchesImages/sketchImg23.jpg'
import sketchImg24 from '../sketchesImages/sketchImg24.jpg'
import sketchImg25 from '../sketchesImages/sketchImg25.jpg'
import sketchImg26 from '../sketchesImages/sketchImg26.jpg'
import sketchImg27 from '../sketchesImages/sketchImg27.jpg'
import sketchImg28 from '../sketchesImages/sketchImg28.jpg'



const galleryImages = [
  {img: sketchImg1},
  {img: sketchImg2},
  {img: sketchImg3},
  {img: sketchImg4},
  {img: sketchImg5},
  {img: sketchImg6},
  {img: sketchImg7},
  {img: sketchImg8},
  {img: sketchImg9},
  {img: sketchImg10},
  {img: sketchImg11},
  {img: sketchImg12},
  {img: sketchImg13},
  {img: sketchImg14},
  {img: sketchImg15},
  {img: sketchImg16},
  {img: sketchImg17},
  {img: sketchImg18},
  {img: sketchImg19},
  {img: sketchImg20},
  {img: sketchImg21},
  {img: sketchImg22},
  {img: sketchImg23},
  {img: sketchImg24},
  {img: sketchImg25},
  {img: sketchImg26},
  {img: sketchImg27},
  {img: sketchImg28},
]

function SketchbookPage() {
  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
    window.location.reload(false);
  };

  return (
    <div className='sketchbookPageContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="sketchbookPageBody"> 
          <div className="sketchbookPageWrapper">
              <WSPGallery galleryImages={galleryImages}/>
          </div>
          <div className="sketchbookDirectButton" onClick={() => redirectPage("/Portfolio/NFT/")}>NFT</div>
        </div>

    </div>
  )
}

export default SketchbookPage