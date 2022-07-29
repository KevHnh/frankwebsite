import React, { useEffect } from 'react'
import NavBar from './NavBar'
import './ArtworkPage.css'
import WSPGallery from './WSPGallery'

import artworkImg1 from '../artworkImages/artworkImg1.jpg'
import artworkImg2 from '../artworkImages/artworkImg2.jpg'
import artworkImg3 from '../artworkImages/artworkImg3.jpg'
import artworkImg4 from '../artworkImages/artworkImg4.jpg'
import artworkImg5 from '../artworkImages/artworkImg5.jpg'
import artworkImg6 from '../artworkImages/artworkImg6.jpg'
import artworkImg7 from '../artworkImages/artworkImg7.jpg'
import artworkImg8 from '../artworkImages/artworkImg8.jpg'
import artworkImg9 from '../artworkImages/artworkImg9.jpg'
import artworkImg10 from '../artworkImages/artworkImg10.jpg'
import artworkImg11 from '../artworkImages/artworkImg11.jpg'
import artworkImg12 from '../artworkImages/artworkImg12.jpg'
import artworkImg13 from '../artworkImages/artworkImg13.jpg'
import artworkImg14 from '../artworkImages/artworkImg14.jpg'
import artworkImg15 from '../artworkImages/artworkImg15.jpg'
import artworkImg17 from '../artworkImages/artworkImg17.jpg'
import artworkImg18 from '../artworkImages/artworkImg18.jpg'
import artworkImg19 from '../artworkImages/artworkImg19.jpg'
import artworkImg20 from '../artworkImages/artworkImg20.jpg'
import artworkImg21 from '../artworkImages/artworkImg21.jpg'
import artworkImg22 from '../artworkImages/artworkImg22.jpg'
import artworkImg23 from '../artworkImages/artworkImg23.jpg'
import artworkImg24 from '../artworkImages/artworkImg24.jpg'
import artworkImg25 from '../artworkImages/artworkImg25.jpg'
import artworkImg26 from '../artworkImages/artworkImg26.jpg'
import artworkImg27 from '../artworkImages/artworkImg27.jpg'



const galleryImages = [
  {
    img: artworkImg1
  },
  {
    img: artworkImg2
  },
  {
    img: artworkImg3
  },
  {
    img: artworkImg4
  },
  {
    img: artworkImg5
  },
  {
    img: artworkImg6
  },
  {
    img: artworkImg7
  },
  {
    img: artworkImg8
  },
  {
    img: artworkImg9
  },
  {
    img: artworkImg10
  },
  {
    img: artworkImg11
  },
  {
    img: artworkImg12
  },
  {
    img: artworkImg13
  },
  {
    img: artworkImg14
  },
  {
    img: artworkImg15
  },
  {
    img: artworkImg17
  },
  {
    img: artworkImg18
  },
  {
    img: artworkImg19
  },
  {
    img: artworkImg20
  },
  {
    img: artworkImg21
  },
  {
    img: artworkImg22
  },
  {
    img: artworkImg23
  },
  {
    img: artworkImg24
  },
  {
    img: artworkImg25
  },
  {
    img: artworkImg26
  },
  {
    img: artworkImg27
  }
]

function ArtworkPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="Artworks" className='artworkPageContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="artworkPageBody">
          <div className="artworkPageWrapper">
            <WSPGallery galleryImages={galleryImages}/>
          </div>
          <a href="#Sketchbook" className="artworkDirectButton">SKETCHBOOK</a>
        </div>
    </div>
  )
}

export default ArtworkPage