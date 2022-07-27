import React, {useState, useEffect} from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTiktok, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (screenWidth > 1000) {
      setToggleMenu(false)
      return
    }
  })

  const toggleNav = () => {
    if (screenWidth > 1000) {
      setToggleMenu(false)
      return
    }

    setToggleMenu(!toggleMenu)
  }

  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div className='navBarWholeContainer'>
      {(toggleMenu || screenWidth > 1000) && (
        <div className="navBarWrapper">
          <div className='navBarContainer'>
            <div className='navBarLeft'> 
              <a className="homeButton" onClick={() => redirectPage("/")}>FRANK LU</a>
            </div>
          <div className='navBarRight'>
              <a onClick={() => redirectPage("/About/")}>ABOUT</a>
              <a onClick={() => redirectPage("/Portfolio/")}>PORTFOLIO</a>
              <a onClick={() => redirectPage("/Shop/")}>SHOP</a>
              <a onClick={() => redirectPage("/Contact/")}>CONTACT</a>
              {(toggleMenu) ? 
                <div className="navBarSeocialMedia">
                  <a href="https://twitter.com/NFT_Flu" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTwitter} style={{fontSize: '2.25rem'}}/></a>
                  <a href="https://www.instagram.com/flu_sketches/" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faInstagram} style={{fontSize: '2.25rem'}}/></a>
                  <a href="https://www.tiktok.com/@flu_sketches?lang=en" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faTiktok} style={{fontSize: '2.25rem'}}/></a>
                </div> : <div></div> }
          </div>
        </div>
      </div>
      )}
        <div className="navButtonWrapper">
          <div className="navButton">
            {(toggleMenu) ? 
            <div className="navButton close">
              <div onClick={toggleNav}><CloseIcon className="actualButton" style={{fontSize:"3rem"}}/></div> 
            </div> :
            <div className="navButton open">
              <div onClick={toggleNav}><MenuIcon className="actualButton" style={{fontSize:"3rem"}}/></div>
            </div>
            }
          </div >
        </div>
    </div>
  )
}

export default NavBar