import React from 'react'
import NavBar from './NavBar'
import './Portfolio.css'

import nftImg2 from '../nftImages/nftImg2.jpg'
import artworkImg13 from '../artworkImages/artworkImg13.jpg'
import sketchImg27 from '../sketchesImages/sketchImg27.jpg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Portfolio() {
  return (
    <div id="Portfolio" className='portfolioContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="portfolioWrapper">
            <div className="portfolioBody">
              <a href="#NFT" className="sectionContainer">
                <div className="titleContainer">
                  NFT WORK
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={nftImg2}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </a>
              <a href="#Artworks" className="sectionContainer">
                <div className="titleContainer">
                  ARTWORKS
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={artworkImg13}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </a>
              <a href="#Sketchbook" className="sectionContainer">
                <div className="titleContainer">
                  SKETCHBOOK
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={sketchImg27}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </a>
            </div>
        </div>

    </div>
  )
}

export default Portfolio