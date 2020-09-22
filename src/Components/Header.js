import React from 'react'
import './Header.css'
import RandomQuotes from './RandomQuotes'

function Header() {
    
    return (
        <div className='header'>
            <div></div>
            <div className='logo'>
                 <h1 className='primary-header'>Day Planner </h1>
            </div>
            <div className='user__dashboard'>
                <RandomQuotes />
              {/*   <img 
                    className='user__profile-pixs' 
                    alt='User profile picture'
                    src='./profile-pixs.jpg'    
                /> */}   
            </div>
            
      </div>
    )
}

export default Header
