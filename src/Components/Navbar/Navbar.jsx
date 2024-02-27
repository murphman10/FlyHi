import React from 'react'
import './Navbar.css'
import logo from '../../assets/FlyHi-Logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>

        
    </div>
  )
}

export default Navbar