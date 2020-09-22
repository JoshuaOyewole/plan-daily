import React from 'react'

function Footer() {

    const footer ={
        position: 'fixed',
        bottom : 0,
        right: 0,
        color: '#333',
        backgroundColor: '#e7e6e6',
        padding: '.5rem 1rem',
        textAlign: 'center',
        width: '100vw'  
    }
    return (
        <footer style={footer}>
            Built with <i style={{color:'red'}} className="far fa-heart"></i> by <a style={{textDecoration: 'none'}} href='http://joshuaoyewole.netlify.app'>Joshua Oyewole</a>
        </footer>     
    )
}

export default Footer
