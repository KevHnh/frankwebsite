import React, {useState, useEffect} from 'react'
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    if (screenWidth > 500) {
      setToggleMenu(false)
      return
    }

    setToggleMenu(!toggleMenu)
  }

  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
    window.location.reload(false);
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
    <div className='navBarContainer'>
      {(toggleMenu || screenWidth > 500) && (
        <div className='navBarContainer'> 
        <a className="homeButton" onClick={() => redirectPage("/")}>FRANK LU</a>
        <div className='navBarRight'>
            <a onClick={() => redirectPage("/About/")}>ABOUT</a>
            <a onClick={() => redirectPage("/Portfolio/")}>PORTFOLIO</a>
            <a onClick={() => redirectPage("/Experience/")}>EXPERIENCE</a>
            <a onClick={() => redirectPage("/Shop/")}>SHOP</a>
            <a onClick={() => redirectPage("/Contact/")}>CONTACT</a>
        </div>
      </div>
      )}
        <div className="navButton">
          {(toggleMenu) ? 
          <div className="navButton">
            <div onClick={toggleNav}><CloseIcon className="actualButton" style={{fontSize:"7.5vw"}}/></div> 
          </div> :
          <div className="navButton">
            <div onClick={toggleNav}><MenuIcon className="actualButton" style={{fontSize:"7.5vw"}}/></div>
          </div>
          }
        </div >
    </div>
  )
}

export default NavBar