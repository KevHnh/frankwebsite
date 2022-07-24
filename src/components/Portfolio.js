import React from 'react'
import NavBar from './NavBar'
import './Portfolio.css'

import nftImg6 from '../nftImages/nftImg6.png'
import artworkImg8 from '../artworkImages/artworkImg8.png'
import sketchImg27 from '../sketchesImages/sketchImg27.png'


function Portfolio() {
  return (
    <div className='portfolioContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="portfolioWrapper">
            <div className="portfolioBody">
              <div className="sectionContainer">
                <div className="titleContainer">
                  NFT WORK
                </div>
                <div className="imagesContainer">
                  <img className="imageElement" src={nftImg6}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
              <div className="sectionContainer">
                <div className="titleContainer">
                  ARTWORKS
                </div>
                <div className="imagesContainer">
                  <img className="imageElement" src={artworkImg8}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
              <div className="sectionContainer">
                <div className="titleContainer">
                  SKETCHBOOK
                </div>
                <div className="imagesContainer">
                  <img className="imageElement" src={sketchImg27}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio