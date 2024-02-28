import React from 'react'
import './Navbar.css'
import logo from '../../assets/FlyHi-Logo.png'
// Begin importing pages here


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul className='options'>
            <li><a href='http://localhost:5173/home'>Home</a></li>
            <li><a href='#'>Flight</a></li>
            <li><a href='#'>Rentals</a></li>
            <li><a href='#'>Hotels</a></li>
            <li><a href='http://localhost:5173/help'>Help</a></li>
        </ul>

        
    </div>
  )
}

export default Navbar