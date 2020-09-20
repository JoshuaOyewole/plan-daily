import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div></div>
            <div className='logo'>
                 <h1 className='primary-header'>Task Tracker </h1>
            </div>
            <div className='user__dashboard'>
              {/*   <img 
                    className='user__profile-pixs' 
                    alt='User profile picture'
                    src='./profile-pixs.jpg'    
                /> */}
                <h5 className='tertiary-header'>A day well plan is a day well spent - Get Quote from API</h5>
            </div>
            
      </div>
    )
}

export default Header
