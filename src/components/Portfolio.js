import React from 'react'
import NavBar from './NavBar'
import './Portfolio.css'
import { useNavigate } from "react-router-dom";

import nftImg2 from '../nftImages/nftImg2.jpg'
import artworkImg13 from '../artworkImages/artworkImg13.jpg'
import sketchImg27 from '../sketchesImages/sketchImg27.jpg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Portfolio() {
  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
    window.location.reload(false);
  };

  return (
    <div className='portfolioContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="portfolioWrapper">
            <div className="portfolioBody">
              <div onClick={() => redirectPage("/Portfolio/NFT/")} className="sectionContainer">
                <div className="titleContainer">
                  NFT WORK
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={nftImg2}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
              <div onClick={() => redirectPage("/Portfolio/Artworks/")} className="sectionContainer">
                <div className="titleContainer">
                  ARTWORKS
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={artworkImg13}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
              <div onClick={() => redirectPage("/Portfolio/Sketchbook/")} className="sectionContainer">
                <div className="titleContainer">
                  SKETCHBOOK
                </div>
                <div className="imagesContainer">
                  <LazyLoadImage effect="blur" className="imageElement" src={sketchImg27}/>
                  <div className="imageFilterContainer"></div>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio