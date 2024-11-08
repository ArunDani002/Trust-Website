import React from 'react'
import '../App.css'

import { Outlet,Link } from 'react-router-dom'

// Layout Component

const Layout = () => {
  return (
    <>
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/work'>Our Work</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    
    </>
  )
}

export default Layout