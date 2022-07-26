import React, { useEffect } from 'react'
import NavBar from './NavBar'
import './NFTPage.css'
import WSPGallery from './WSPGallery'
import { useNavigate } from "react-router-dom";

import nftImg1 from '../nftImages/nftImg1.jpg'
import nftImg2 from '../nftImages/nftImg2.jpg'
import nftImg3 from '../nftImages/nftImg3.jpg'
import nftImg4 from '../nftImages/nftImg4.jpg'
import nftImg5 from '../nftImages/nftImg5.jpg'
import nftImg6 from '../nftImages/nftImg6.jpg'
import nftImg7 from '../nftImages/nftImg7.jpg'
import nftImg8 from '../nftImages/nftImg8.jpg'
import nftImg9 from '../nftImages/nftImg9.jpg'
import nftImg10 from '../nftImages/nftImg10.jpg'
import nftImg11 from '../nftImages/nftImg11.jpg'
import nftImg12 from '../nftImages/nftImg12.jpg'

function NFTPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
  };

  const galleryImages = [
    {
      img: nftImg1
    },
    {
      img: nftImg2
    },
    {
      img: nftImg3
    },
    {
      img: nftImg4
    },
    {
      img: nftImg5
    },
    {
      img: nftImg6
    },
    {
      img: nftImg7
    },
    {
      img: nftImg8
    },
    {
      img: nftImg9
    },
    {
      img: nftImg10
    },
    {
      img: nftImg11
    },
    {
      img: nftImg12
    },
  ]

  return (
    <div className='nftPageContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="nftPageBody">
          <div className="nftPageWrapper">
              <WSPGallery galleryImages={galleryImages}/>
          </div>
          <div className="nftDirectButton" onClick={() => redirectPage("/Portfolio/Artworks/")}>ARTWORKS</div>
        </div>
    </div>
  )
}

export default NFTPage