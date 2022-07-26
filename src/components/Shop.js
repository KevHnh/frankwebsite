import React from 'react'
import NavBar from './NavBar'
import './Shop.css'

function Shop() {
  return (
    <div className='shopContainer'>
        <div className='navBarContainer'>
            <NavBar/>
        </div>
        <div className="shopBody">
          <div className="shopWrapper">
              SHOP COMING SOON
          </div>
        </div>
    </div>
  )
}

export default Shop